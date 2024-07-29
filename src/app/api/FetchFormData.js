import { db } from './firebase';
import { collection, getDocs, query, where} from 'firebase/firestore';

async function fetchFormData() {
  const querySnapshot = await getDocs(collection(db, 'register'));
  const formData = [];
  querySnapshot.forEach((doc) => {
    formData.push({ id: doc.id, ...doc.data() });
  });
  
  return formData;
}
async function fetchUserByEmail(email) {
  try {
    // Create a query to filter documents by email
    const q = query(collection(db, 'register'), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    let user = null;
    querySnapshot.forEach((doc) => {
      user = { id: doc.id, ...doc.data() };
    });

    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw new Error("Failed to fetch user data.");
  }
}
export { fetchFormData, fetchUserByEmail };