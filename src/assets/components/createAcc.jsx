import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";

const CreateAcc = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [company, setCompany] = useState("");
  const [isAgency, setisAgency] = useState(true);

  const isFormValid = email && pass;

  const handleSignUp = () => {
    const userData = { username, number, email, pass, company, isAgency };
    localStorage.setItem("popxUser", JSON.stringify(userData));
    navigate("/profile");
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center px-4 py-8 sm:px-6">
      <div className="w-full max-w-md flex flex-col">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          Create your
          <br />
          PopX account
        </h1>
        <label className="text-purple-700 font-semibold text-sm sm:text-base mt-4">
          Full name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder=""
          className="border-2 border-gray-300 rounded-lg focus:border-purple-800 focus:outline-none w-full p-2 mb-5"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <label className="text-purple-700 font-semibold text-sm sm:text-base">
          Phone number<span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          className="border-2 border-gray-300 rounded-lg focus:border-purple-800 focus:outline-none w-full p-2 mb-5"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        ></input>
        <label className="text-purple-700 font-semibold text-sm sm:text-base">
          Email Address<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          className="border-2 border-gray-300 rounded-lg focus:border-purple-800 focus:outline-none mb-5 w-full p-2"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <label className="text-purple-700 font-semibold text-sm sm:text-base">
          Password<span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          className="border-2 border-gray-300 rounded-lg focus:border-purple-800 focus:outline-none mb-5 w-full p-2"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        ></input>
        <label className="text-purple-700 font-semibold text-sm sm:text-base">Company Name</label>
        <input
          type="text"
          className="border-2 border-gray-300 rounded-lg focus:border-purple-800 focus:outline-none mb-5 w-full p-2"
          onFocus={() => {}}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        ></input>
        <label className="text-purple-700 font-semibold text-sm sm:text-base">
          Are you an Agency?<span className="text-red-500">*</span>
        </label>
        <div className="flex gap-4 mt-2 mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="agency"
              value="yes"
              className="accent-purple-800"
              onClick={() => {
                setisAgency(true);
              }}
            />
            <span className="text-sm">Yes</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="agency"
              value="no"
              className="accent-purple-800"
              onClick={() => {
                setisAgency(false);
              }}
            />
            <span className="text-sm">No</span>
          </label>
        </div>
        <button
          className="bg-purple-900 text-white w-full h-fit p-3 border-none rounded-lg hover:bg-purple-800 font-semibold"
          onClick={handleSignUp}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default CreateAcc;
