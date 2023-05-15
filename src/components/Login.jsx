import { FcGoogle } from "react-icons/fc";
import Header from "../shared/Header";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Header />{" "}
      <div className="h-screen bg-[#E5E5E5] flex items-center justify-center">
        <div className="border-2 border-black p-16 rounded bg-white">
          <h1 className="mb-8 text-center text-2xl">Login with</h1>
          <NavLink className="flex items-center rounded-full justify-between p-4 border border-black ">
            <FcGoogle className="mr-6" /> Continue With Google
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Login;
