import axios from "axios";
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";

export default function useFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //interceptor para requisição .
    axios.interceptors.request.use((config: any) => {
      if (config.timeout === 5000) {
        redirect("/timeout");
      } else {
        return config;
      }
    });
    //Interceptor para resposta
    axios.interceptors.response.use(
      (response: any) => {
        return response;
      },

      (error) => {
        if (
          error.response &&
          [500, 502, 503, 504, 507, 508, 509].includes(error.response.status)
        ) {
          redirect("/erro");
        } else {
          return redirect("/errorserver");
        }
      }
    );
    //Requisção da Api
    axios
      .get("https://games-test-api-81e9fb0d564a.herokuapp.com/api/data", {
        headers: { "dev-email-address": "reborn@gmail.com" },
      })
      .then((data) => setData(data.data));
  }, []);

  return { data };
}
