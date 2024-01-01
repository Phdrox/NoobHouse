import { MdDateRange } from "react-icons/md";
import { ICard } from "../interface/Card";
import { Link } from "react-router-dom";

function Card({ title, thumbnail, id, release_date, visible }: ICard) {
  return (
    <div className="flex flex-col w-1/4 rounded shadow-2xl  items-center p-2 bg-white  text-black gap-3 phone:w-11/12 tablet:w-2/6 ">
      <img src={thumbnail} alt={title} className="w-full rounded" />
      <div className="flex flex-col items-start w-full gap-2 pl-3">
        <p className="font-bold phone:text-sm">{title}</p>
        <p className="flex gap-3 items-center phone:text-sm">
          <MdDateRange />
          {release_date}
        </p>
      </div>
      {visible ? (
        <Link
          to={`/details?id=${id}`}
          className="p-4 w-11/12 hover:bg-gradient-to-r hover:to-red-600 hover:from-blue-600  hover:text-white transition-all duration-200 text-black rounded bg-transparent hover:bg-clip-padding border-2 hover:border-transparent border-black
            phone:p-2
            "
        >
          <button className="font-quick ">Details</button>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Card;
