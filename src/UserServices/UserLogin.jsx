import React, { useState } from "react";

export default function UserLogin() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", formData);
        // 👉 Call API or authentication logic here

    };

    return (
        <div style={{ maxWidth: "400px", margin: "50px auto" }}>
            <h2>User Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "15px" }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>

                <button type="submit" style={{ padding: "10px 15px" }}>
                    Login
                </button>
            </form>
        </div>
    );
}
