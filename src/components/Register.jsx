import Header from "../shared/Header";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Header />
      <div className="h-screen bg-[#E5E5E5] flex items-center justify-center">
        <div className="border-2 border-black p-10 rounded bg-white text-black flex flex-col space-y-3">
          <h1 className="mb-5 text-center text-2xl">Register as a Volunteer</h1>
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 pl-0 placeholder:text-black bg-transparent border-b border-gray-300 w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Username or Email"
            className="p-2 pl-0 placeholder:text-black bg-transparent border-b border-gray-300 w-full max-w-xs"
          />
          <input
            type="date"
            className="p-2 pl-0 placeholder:text-black bg-transparent border-b border-gray-300 w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Description"
            className="p-2 pl-0 placeholder:text-black bg-transparent border-b border-gray-300 w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Photo Link"
            className="p-2 pl-0 placeholder:text-black bg-transparent border-b border-gray-300 w-full max-w-xs"
          />
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
    </>
  );
};

export default Register;
