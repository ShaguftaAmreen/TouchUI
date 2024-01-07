import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
   });
const [error, setError] = useState("");
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // const api = () => {
  //   axios
  //     .post("https://test.touchapp.in/auth/register", {
  //       full_name: "vineeth",
  //       gender: "male",
  //       mobile: 6300292408,
  //       password: "Bh4rg4v@12",
  //       user_name: "mandlavineeth1235",
  //       udid: 54685213,
  //       fcm_token: 456851298756,
  //       dob: "",
  //       countryCode: "+91",
  //     })
  //     .then((val) => console.log(val.data))
  //     .catch((error) => console.log(error));
  // };
  //   api();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");

    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    
    try {
      const response = await axios.post(
        "https://test.touchapp.in/auth/register",
        formData,
        // {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(formData),
        // }
      );
      console.log(response);

      if (response.status === 200) {
        console.log("done")
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      setError("An error occurred while registering. Please try again later.");
    }
  };

  return (
    <div
      style={{ textAlign: "center", height: "700px", backgroundColor: "black",color:"white" }}
    >
      
        <h2 style={{ color: "white" }}>Sign Up</h2>
        <form style={{ backgroundColor: "black",marginLeft:"8px"} }>
          <div >
            <label for="input1" style={{ marginRight: "125px" }}>
              Full Name :
            </label>
            <br />
            <input
              id="input1"
              type="text"
              className="input"
              name="fullName"
              placeholder="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label for="input2" style={{ marginRight: "125px" }}>
              Username :
            </label>
            <br />
            <input
              id="input2"
              type="text"
              className="input"
              name="username"
              placeholder="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label for="input3" style={{ marginRight: "150px" }}>
              Email :
            </label>
            <br />
            <input
              id="input3"
              type="text"
              className="input"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label for="input4" style={{ marginRight: "100px" }}>
              Mobile Number :
            </label>
            <br />
            <input
              id="input4"
              type="text"
              className="input"
              name="mobileNumber"
              placeholder="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label for="input5" style={{ marginRight: "130px" }}>
              Password :
            </label>
            <br />
            <input
              id="input5"
              type="password"
              className="input"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label for="input6" style={{ marginRight: "92px" }}>
              Confirm Password :
            </label>
            <br />
            <input
              id="input6"
              type="password"
              className="input"
              name="confirmPassword"
              placeholder="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="button" className="button" onClick={handleSubmit}>
            Sign Up
          </button>
        </form>
        {error && <p>{error}</p>}
      </div>
   
  );
};

export default SignUp;