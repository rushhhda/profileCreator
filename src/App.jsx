import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import CreateAcc from "./assets/components/createAcc.jsx";
import SignIn from "./assets/components/SignIn.jsx";
import Profile from "./assets/components/Profile.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-account" element={<CreateAcc />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex justify-center px-4 py-8">
      <div className="w-full max-w-md flex flex-col justify-end items-center pb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-3">Welcome to popX</h1>
        <p className="text-gray-500 font-semibold w-full mb-6 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iure cum
          corrupti dolorem cupiditate omnis.
        </p>
        <button
          className="bg-purple-900 text-white w-full h-fit p-2 border-none rounded-lg mb-3 hover:bg-purple-800"
          onClick={() => navigate("/create-account")}
        >
          Create Account
        </button>
        <button
          className="bg-purple-400 text-white w-full h-fit p-2 border-none rounded-lg hover:bg-purple-500"
          onClick={() => navigate("/sign-in")}
        >
          Already registered? Log in
        </button>
      </div>
    </div>
  );
}

export default App;
