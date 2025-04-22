import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = () => {
    // Here you can handle the password reset logic
    console.log("Password reset link sent to:", email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Forgot your password?</h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your email address and if you have an account with us, a password reset instruction will be sent to your email.
        </p>
        <input
          type="email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          placeholder="Enter email address"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          onClick={handleResetPassword}
          className="w-full py-3 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
