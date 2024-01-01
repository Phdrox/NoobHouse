import { Link } from "react-router-dom";
function Menu() {
  const categories = [
    "Shooter",
    "MMOARPG",
    "ARPG",
    "Fighting",
    "Action RPG",
    "Battle Royale",
    "MMORPG",
    "MOBA",
    "Sports",
    "Racing",
    "Card Game",
    "Strategy",
    "MMO",
    "Social",
    "Fantasy",
  ];
  return (
    <ul className=" flex flex-wrap my-6 pt-0 mr-3 ">
      <li className=" flex flex-wrap gap-3 w-full text-black font-bold text-quick bg-trasparent rounded text-sm phone:p-3 phone:justify-center tablet:p-3 tablet:justify-center  ">
        {categories.map((res) => (
          <Link
            to={`/categories?type=${res}`}
            className="  flex justify-center items-center  text-right  hover:bg-gradient-to-r hover:to-red-500 hover:from-blue-500 hover:text-transparent  hover:bg-clip-text 
                     text-black uppercase duration-200  "
          >
            {res}
          </Link>
        ))}
      </li>
    </ul>
  );
}

export default Menu;
