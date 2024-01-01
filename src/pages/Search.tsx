import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { ICard } from "../interface/Card";
import Card from "../components/Card";
import CircularProgress from "@mui/material/CircularProgress";

function Search() {
  const { data } = useFetch();
  const [params] = useSearchParams();
  const query = params.get("title");

  const search = data.filter((item: ICard) =>
    item.title?.toLowerCase().startsWith(`${query?.toLocaleLowerCase()}`)
  );

  return (
    <div className="flex gap-4 flex-wrap w-full  justify-center py-7">
      {search.length === 0 ? (
        <CircularProgress color="inherit" />
      ) : (
        search.map((item: ICard) => (
          <Card
            title={item.title}
            thumbnail={item.thumbnail}
            id={item.id}
            release_date={item.release_date}
            visible={true}
          />
        ))
      )}
    </div>
  );
}

export default Search;
