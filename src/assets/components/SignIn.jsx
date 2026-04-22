import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("popxUser"));

    if (!storedUser) {
      setError("No account found. Please create an account first.");
      return;
    }

    if (storedUser.email === email && storedUser.pass === pass) {
      navigate("/profile");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center px-4 py-8 sm:px-6">
      <div className="w-full max-w-md flex flex-col">
        <h1 className="font-bold text-2xl sm:text-3xl mb-4">
          Signin to your
          <br />
          PopX Account
        </h1>
        <p className="font-bold text-gray-500 mb-7 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
          dicta?
        </p>

        <label className="text-purple-500 text-sm sm:text-base">
          Email Address<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          className="border-2 border-gray-300 rounded-lg disabled: focus:border-purple-800 focus:outline-none mb-7 w-full p-2"
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
        />

        <label className="text-purple-500 text-sm sm:text-base">
          Password<span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          className="border-2 border-gray-300 rounded-lg focus:border-purple-800 focus:outline-none mb-7 w-full p-2"
          onChange={(e) => {
            setPass(e.target.value);
            setError("");
          }}
        />

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button
          onClick={handleLogin}
          disabled={!email || !pass}
          className={`border-none rounded-lg w-full h-fit p-3 text-white ${
            email && pass
              ? "bg-purple-600 cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default SignIn;
