import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { ICard } from "../interface/Card";
import Card from "../components/Card";
import Menu from "../components/Menu";
import CircularProgress from "@mui/material/CircularProgress";

function Category() {
  const [params] = useSearchParams();
  const query = params.get("type");

  const { data } = useFetch();

  const categoria = data.filter((item: ICard) => item.genre == `${query}`);

  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <Menu />
      <div className="flex gap-3 flex-wrap justify-center w-full m-3 py-7">
        {categoria.length === 0 ? (
          <CircularProgress color="success" />
        ) : (
          categoria.map((datas: ICard) => (
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

export default Category;
