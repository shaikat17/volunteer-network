import Swal from "sweetalert2";
import Header from "../shared/Header";
import { NavLink } from "react-router-dom";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const date = form.date.value;
    const description = form.description.value;
    const photoUrl = form.photoUrl.value;

    const data = { fullName, email, date, description, photoUrl, events: [] };
    form.reset();
    fetch("http://127.0.0.1:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          localStorage.setItem('user',result.insertedId)
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Congratulations... Now You're an Honourable Volunteer",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Opps!! Something went wrong.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <>
      <Header />
      <div className="h-screen bg-[#E5E5E5] flex items-center justify-center">
        <div className="border-2 border-black p-10 rounded bg-white text-black ">
          <h1 className="mb-5 text-center text-2xl">Register as a Volunteer</h1>
          <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 pl-3 pl-0 placeholder:text-black bg-transparent border-b border-gray-300 w-full max-w-xs"
              name="fullName"
            />
            <input
              type="text"
              placeholder="Username or Email"
              className="p-2 pl-3 pl-0 placeholder:text-black bg-transparent border-b border-gray-300 w-full max-w-xs"
              name="email"
            />
            <input
              type="date"
              className="p-2 pl-3 pl-0 placeholder:text-black bg-transparent border-b border-gray-300 w-full max-w-xs"
              name="date"
            />
            <textarea
              type="text"
              placeholder="Description"
              className="p-2 pl-3 pl-0 placeholder:text-black bg-transparent border-b border-gray-300 w-full max-w-xs"
              name="description"
            />
            <input
              type="text"
              placeholder="Photo Link"
              className="p-2 pl-3 pl-0 placeholder:text-black bg-transparent border-b border-gray-300 w-full max-w-xs"
              name="photoUrl"
            />
            <button className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
