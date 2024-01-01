import { useState } from "react";
import Card from "../components/Card";

import useFetch from "../hooks/useFetch";
import { ICard } from "../interface/Card";
import CircularProgress from "@mui/material/CircularProgress";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Home() {
  const { data } = useFetch();

  const limit: number = 20;

  const [currentPage, setCurrent] = useState(0);
  const paginas: number = Math.ceil(data.length / limit);
  const startindex = currentPage * limit;
  const lastindex = startindex + limit;
  const currentItems = data.slice(startindex, lastindex);

  return (
    <div className="flex items-start justify-center w-full flex-col ">
      <div className="w-full flex justify-center py-7 ">
        <ul className="flex gap-4 w-full justify-center phone:gap-1">
          <button
            onClick={() => setCurrent(currentPage - 1)}
            disabled={currentPage === 0}
            className=" bg-gray-900 w-6 h-6 rounded text-white shadow"
          >
            <IoIosArrowBack />
          </button>
          {Array.from(Array(paginas), (item, index) =>
            index === currentPage ? (
              <button
                className="cursor-pointer bg-gray-900 w-6 h-6 rounded text-white shadow"
                value={index}
                key={item}
                onClick={(e: any) => setCurrent(Number(e.target.value))}
              >
                {index + 1}
              </button>
            ) : (
              <button
                className="cursor-pointer "
                value={index}
                onClick={(e: any) => setCurrent(Number(e.target.value))}
              >
                {index + 1}
              </button>
            )
          )}
          <button
            onClick={() => setCurrent(currentPage + 1)}
            disabled={currentPage === paginas - 1}
            className=" bg-gray-900 w-6 h-6 rounded text-white shadow"
          >
            <IoIosArrowForward />
          </button>
        </ul>
      </div>
      <div className="flex gap-4 flex-wrap w-full my-10 justify-center phone:gap-1">
        {data.length === 0 ? (
          <CircularProgress color="inherit" />
        ) : (
          currentItems.map((datas: ICard) => (
            <Card
              title={datas.title}
              thumbnail={datas.thumbnail}
              release_date={datas.release_date}
              id={datas.id}
              visible={true}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
