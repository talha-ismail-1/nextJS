"use client";
import Link from 'next/link';
import React from "react";
import { useRouter } from 'next/navigation';
import { db, collection, doc, setDoc } from '../api/firebase';

const Register = () => {
    const [formData, setFormData] = React.useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });
    const [error, setError] = React.useState("");
    const router = useRouter();
    function handleChange(e: { target: { name: any; value: any; }; }) {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    async function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        try {
            if (formData.firstname === "" || formData.lastname === "" || formData.email === "" || formData.password === "") {
                setError("Please fill out all fields.");
                return;
            }
            const customDocId = formData.firstname + formData.lastname;
            const docRef = doc(collection(db, 'register'), customDocId);
            await setDoc(docRef, {
                firstname: formData.firstname,
                lastname: formData.lastname,
                email: formData.email,
                password: formData.password,
                timestamp: new Date(),
            });
            setError("");
            router.push("/login");
        }
        catch (err) {
            console.error("Error adding document: ", err);
            setError("Error adding document: ");
        }
    }

    return (
        <div className="loginPage">
            <div className="container">
                <h1>Register Here!</h1>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input type="text" className="form-control" name="firstname" value={formData.firstname} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input type="text" className="form-control" name="lastname" value={formData.lastname} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Password:</label>
                                    <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                    <p>Already have an account? <Link href="/login">Login here!</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
