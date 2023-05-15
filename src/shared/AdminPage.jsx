import { NavLink, Outlet } from "react-router-dom";
import logo from "../../public/logos/logo.png";
import users from "../../public/logos/users.png"
import plus from "../../public/logos/plus.png"

const AdminPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/3 flex flex-col space-y-6 pl-4 pt-3">
        <NavLink to="/"><img className="w-40" src={logo} alt="logo" /></NavLink>
        <div className="flex flex-col space-y-2">
          <NavLink to="/volunteer-list" className={({isActive}) => isActive ? "text-blue-500 flex items-center" : "flex items-center"}> <img className="w-5 mx-3" src={users} alt="users" /> Volunteer List</NavLink>
          <NavLink to="/add-event" className={({isActive}) => isActive ? "text-blue-500 flex items-center" : "flex items-center"}> <img className="w-5 mx-3" src={plus} alt="plus" /> Add Event</NavLink>
        </div>
      </div>
      <div className="w-2/3">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
