import { ChangeEvent, useState, KeyboardEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const element = e.target.value;
    setSearch(element);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      navigate(`/search?title=${search}`);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 w-1/2  phone:w-full phone:order-3">
      <input
        className="w-1/2  h-10  p-2  text-black my-4 border-b-2 focus:outline-none focus:border-gray-500 border-black phone:w-10/12"
        placeholder="Search your game..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <Link
        to={`/search?title=${search}`}
        className="text-3xl   h-10 w-10 bg-black flex justify-center items-center rounded 
        hover:bg-gradient-to-r hover:to-red-600 hover:from-blue-600  text-white transition-all duration-200
        phone:p-0 phone:w-8 phone:h-8 phone:text-2xl tablet:w-8 tablet:h-8 tablet:p-0 tablet:text-2xl
        "
      >
        <FaSearch />
      </Link>
    </div>
  );
}

export default Search;
