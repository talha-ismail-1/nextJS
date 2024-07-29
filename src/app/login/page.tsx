"use client";
import Link from 'next/link';
import React from "react";
import { fetchUserByEmail } from '../api/FetchFormData';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [formData, setFormData] = React.useState({
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
            if (formData.email === "" || formData.password === "") {
                setError("Please fill out all fields.");
                return;
            }

            const user: any = await fetchUserByEmail(formData.email);
            if (user && user.email === formData.email) {
                if (user && user.password === formData.password) {
                    // router.push("/home");
                    localStorage.setItem('auth', 'true'); // Set authentication state
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
        <div className="loginPage">
            <div className="container">
            <h1>Login Here!</h1>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Enter email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Password:</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Enter password"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <button type="submit" className="btn btn-primary">Login</button>
                    <p>Don't have an account? <Link href="/register">Register Here!</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Login;
