import useFetch from "../hooks/useFetch";
import { ICard } from "../interface/Card";
import { Link, useSearchParams } from "react-router-dom";
import Card from "../components/Card";

import CircularProgress from "@mui/material/CircularProgress";

function Details() {
  const [param] = useSearchParams();
  const query = param.get("id");

  const { data } = useFetch();

  const details = data.filter((item: ICard) => item.id == `${query}`);
  console.log(details);

  return (
    <div className="p-10">
      {details.length === 0 ? (
        <CircularProgress color="inherit" />
      ) : (
        details.map((item: ICard) => (
          <div className="flex gap-10 phone:flex-col phone:11/12 ">
            <Card
              title={item.title}
              thumbnail={item.thumbnail}
              release_date={item.release_date}
              visible={false}
            />
            <div className="flex flex-col items-start  gap-5  p-4 h-full font-semibold bg-white text-black rounded w-1/2 phone:w-11/12">
              <div className="flex items-center gap-2 shadow-2xl  p-3 bg-gradient-to-r from-red-700 to-blue-600 text-white rounded phone:w-11/12 tablet:w-11/12">
                Plataform: <p className="font-normal">{item.platform}</p>
              </div>

              <div
                className="flex flex-col items-start shadow-2xl  gap-2 flex-wrap p-3 bg-gradient-to-r from-red-700 to-blue-600 text-white rounded
           phone:w-full
          "
              >
                Description{" "}
                <p className=" text-left font-normal text-sm ">
                  {item.short_description}
                </p>
              </div>

              <div className="flex items-center gap-2 p-3 shadow-2xl  bg-gradient-to-r from-red-700 to-blue-600 text- rounded text-white">
                Genre: <p className="font-normal">{item.genre}</p>
              </div>

              <button className="p-3 bg-gradient-to-r from-red-700 to-blue-600 w-1/4 phone:w-1/2 tablet:w-11/12 text-white rounded shadow-2xl  transition-all duration-300hover:bg-clip-padding hover:bg-gradient-to-r hover:from-black hover:to-black">
                <Link to={`${item.game_url}`} target="_blank">
                  Jogue Agora
                </Link>
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Details;
