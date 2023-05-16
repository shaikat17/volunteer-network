import { NavLink } from "react-router-dom";
import logo from "../../public/logos/logo.png";

const Header = () => {
  return (
    <div className="navbar bg-[#E5E5E5]">
      <NavLink className="ml-auto mr-auto" to="/"><img className="w-44" src={logo} alt="logo" /></NavLink>
    </div>

  );
};

export default Header;
