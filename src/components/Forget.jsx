import React, { useState } from 'react';

function Forget() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate input (you can add more validation logic)
    if (!input) {
      setMessage('Mobile number or email is required.');
      return;
    }

    // Send a request to the Forgot Password API
    try {
      const response = await fetch('https://test.touchapp.in/auth/forgotPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
       // body: JSON.stringify({ 'mobile/email': input }),
       body: JSON.stringify({ mobile: input }),

      });

      if (response.ok) {
        // Successfully sent OTP
        setMessage('OTP sent successfully. Check your registered mobile or email.');
      } else {
        // Handle errors
        setMessage('Failed to send OTP. Please check your input.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred while processing your request.');
    }
  };

  return (
    <div style={{textAlign:"center",backgroundColor:"black",color:"white",height:"650px"}}>
      <h2 style={{backgroundColor:"black",color:"white"}}>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="mobileOrEmail" style={{backgroundColor:"black",color:"white"}}>Mobile number or email:</label><br />
          <input style={{backgroundColor:"black",color:"white"}}
            type="text"
            id="mobileOrEmail"
            value={input}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" style={{marginTop:"20px"}}>Send OTP</button>
      </form>
      {message && <p style={{backgroundColor:"black",color:"white"}}>{message}</p>}
    </div>
  );
}

export default Forget;