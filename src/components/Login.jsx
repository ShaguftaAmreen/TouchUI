import React, { useState } from "react";
//import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" , udid:"dummytest1",fcm_token:"test23",mobile:"9381829628"  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log(formData)
    try {
      const response = await fetch("http://test.touchapp.in/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
const accessToken = data.accessToken;

        window.location.href = "/getfeeds";
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div style={{ backgroundColor: "black", display: "flex", height: 700 ,textAlign:"center",color:"white"}}>
      <div className="login-container" style={{ backgroundColor: "black"}}>
        <h2
          style={{ color: "white", marginLeft: "500px", marginBottom: "10px" }}
        >
          Wellcome to <u><b style={{fontSize:"50px"}}>Touch-UI</b></u>
        </h2>
        <form onSubmit={handleSubmit} style={{ backgroundColor: "black" }}>
          <br />
          <input
            style={{ backgroundColor: "black", color: "white",marginLeft: "500px" }}
            type="text"
            name="username"
            placeholder="Username/Email/Mobile"
            value={formData.username}
            onChange={handleChange}
            required
          />
<br />
          <input
            style={{ backgroundColor: "black", color: "white",marginLeft: "500px" }}
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          /><br></br>
           <Link to="/forget" style={{marginLeft: "500px"}}>Forgot password ?</Link><br></br>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button" style={{marginLeft: "500px"}}>
            Login
          </button>
          <p style={{ color: "white",marginLeft: "500px" }}>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;