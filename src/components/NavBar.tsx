import { Link } from "react-router-dom";
import Search from "./Search";
import { BiSolidCategory } from "react-icons/bi";

function NavBar() {
  return (
    <div className="w-full ">
      <div className="flex items-center my-10 w-full justify-around phone:flex-col phone:gap-4">
        <Link to="/" className="phone:order-2">
          <span className="flex gap-2 items-center ">
            <img
              src="/Logo.png"
              alt=""
              className="w-16 ml-10 phone:w-16 phone:m-0"
            />

            <h2 className="m-0 text-4xl font-glitch phone:text-3xl ">
              NoobHouse
            </h2>
          </span>
        </Link>
        <Search />
        <Link
          to={"/categories?type=Shooter"}
          className="p-3 bg-gradient-to-r to-red-600 from-blue-600  text-white rounded w-1/6 phone:w-8 phone:p-2 phone:relative phone:left-28 phone:bottom-3   
           phone:order-1 tablet:w-8 tablet:p-2 tablet:relative tablet:right-2"
        >
          <span className="hidden phone:flex tablet:flex">
            <BiSolidCategory />
          </span>
          <span className="phone:hidden tablet:hidden">Categories</span>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
