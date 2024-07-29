"use client";
import Link from "next/link";
import React from "react";
import { fetchUserByEmail } from "../api/FetchFormData";
import { useRouter } from "next/navigation";

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState("");
  const router = useRouter();
  function handleChange(e: { target: { name: any; value: any } }) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    try {
      if (formData.email === "" || formData.password === "") {
        setError("Please fill out all fields.");
        return;
      }

      const user: any = await fetchUserByEmail(formData.email);
      if (user && user.email === formData.email) {
        if (user && user.password === formData.password) {
          // router.push("/home");
          localStorage.setItem("auth", "true"); // Set authentication state
          router.replace("/home"); // Redirect to home
        } else {
          setError("Invalid email or password.");
        }
      } else {
        setError("User Not Found.");
      }
    } catch (err) {
      console.error("Error fetching user data: ", err);
      setError("Error fetching user data.");
    }
  }

  return (
    <main>
      <div className="flex vh-100 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>  

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </main>
    // <div className="loginPage">
    //     <div className="container">
    //     <h1>Login Here!</h1>
    //         {error && <p className="text-red-500">{error}</p>}
    //         <form onSubmit={handleSubmit}>
    //             <div className="row">
    //                 <div className="col">
    //                     <div className="col-md-12">
    //                         <div className="form-group">
    //                             <label>Email:</label>
    //                             <input
    //                                 type="email"
    //                                 name="email"
    //                                 value={formData.email}
    //                                 onChange={handleChange}
    //                                 className="form-control"
    //                                 placeholder="Enter email"
    //                                 required
    //                             />
    //                         </div>
    //                     </div>
    //                     <div className="col-md-12">
    //                         <div className="form-group">
    //                             <label>Password:</label>
    //                             <input
    //                                 type="password"
    //                                 name="password"
    //                                 value={formData.password}
    //                                 onChange={handleChange}
    //                                 className="form-control"
    //                                 placeholder="Enter password"
    //                                 required
    //                             />
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             {error && <p className="text-red-500">{error}</p>}
    //             <button type="submit" className="btn btn-primary">Login</button>
    //             <p>Don't have an account? <Link href="/register">Register Here!</Link></p>
    //         </form>
    //     </div>
    // </div>
  );
};

export default Login;
