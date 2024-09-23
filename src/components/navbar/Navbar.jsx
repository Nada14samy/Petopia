import { Link } from "react-router-dom";
// import Cookies from 'js-cookie';
const NavbarBrand = () => {
  return (
    <nav className="nav w-full flex justify-center items-center h-fit p-4 ">
      <div className="container flex justify-between w-11/12">
        <div className="nav-brand text-2xl font-medium mt-[5px]">
          <h1 className="text-4xl">
            <Link to="/">My Pets</Link>
          </h1>
        </div>
        <ul className="nav-items flex">
          <li className="nav-item m-3">
            <Link to="/" className="nav-link text-black font-medium text-lg">
              Home
            </Link>
          </li>
          <li className="nav-item m-3">
            <Link to="/find-a-pet" className="nav-link text-black font-medium text-lg">
              Find a pet
            </Link>
          </li>
          <li className="nav-item m-3">
            <Link to="/about" className="nav-link text-black font-medium text-lg">
              About Us
            </Link>
          </li>
        </ul>
        <div className="flex gap-4">
          <div className="btn flex justify-center items-center rounded-xl px-5 py-0 bg-primary">
              <Link to="/signup" className="text-white m-0 p-0">
                Sign Up
              </Link>
            </div>
            <div className="btn flex justify-center items-center rounded-xl px-5 py-0 bg-primary">
              <Link to="/login" className="text-white m-0 p-0">
                Log In
              </Link>
            </div> 
          {/* { !Cookies.get('token') ?
          <>
              <div className="btn flex justify-center items-center rounded-xl px-5 py-0 bg-primary">
              <Link to="/signup" className="text-white m-0 p-0">
                Sign Up
              </Link>
            </div>
            <div className="btn flex justify-center items-center rounded-xl px-5 py-0 bg-primary">
              <Link to="/login" className="text-white m-0 p-0">
                Log In
              </Link>
            </div> 
          </>
          : 
          <div className="btn flex justify-center items-center rounded-xl px-5 py-0 bg-primary">
            <Link to="/signup" className="text-white m-0 p-0">
              Log Out
            </Link>
          </div>
          }  */}
        </div>
      </div>
    </nav>
  );
};
export default NavbarBrand;
