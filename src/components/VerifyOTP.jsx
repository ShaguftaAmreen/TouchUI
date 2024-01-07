import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
//import "./Verify.css";

function VerifyOTP() {
  const [otp, setOTP] = useState("");
  const [verificationStatus, setVerificationStatus] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate("");

  const handleSendOTP = async () => {
    try {
      const response = await axios.post(
        "https://test.touchapp.in/auth/verifyOtp"
      );
      console.log(response.data);
      if (response.data.otp) {
        setVerificationStatus("OTP sent successfully");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setError("Failed to send OTP");
    }
  };
  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post(
        "http://test.touchapp.in/auth/verifyOtp",
        {
          otp,
        }
      );
      console.log(response.data);
      navigate("/createpost");
      setVerificationStatus(response.data.message);
      setError("");
    } catch (error) {
      console.error(error);
      setError("Failed to verify OTP");
    }
  };

  return (<div style={{textAlign:"center",backgroundColor:"black",color:"white",height:"650px"}}>
    <div className="container" style={{textAlign:"center",backgroundColor:"black",color:"white",height:"650px",width:"3000px"}}>
      <h1>OTP Verification</h1>
      <div className="form-group">
        {/* <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="text"
          id="mobileNumber"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        /> */}
      </div>
      <div className="form-group">
        <label for="otp">OTP:</label>
        <input
          type="text"
          id="otp"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
        />
      </div>

      {/* <button onClick={handleSendOTP}>Send OTP</button> */}
      <button onClick={handleVerifyOTP}>Verify OTP</button>

      {error && <p className="error">{error}</p>}
      {verificationStatus && <p className="success">{verificationStatus}</p>}
      <br />
      {/* <Link to="/createpost">Create Post</Link> */}
    </div>
    </div>
  );
}
export default VerifyOTP;