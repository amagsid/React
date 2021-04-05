import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const CityForecast = () => {
  const { cityId } = useParams();
  const url = `http://api.openweathermap.org/data/2.5/forecast?id=`;
  const ApiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  const useFetch = (url) => {
    const [data, setData] = useState(null || {});
    // const [city, setCity] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(null);

    useEffect(() => {
      setLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        })
        .finally(() => setLoading(false));
    }, []);

    //setTimeout on  error feedback
    // useEffect(() => {
    //   const timeout = setTimeout(() => {
    //     setError(null);
    //   }, 2000);

    //   return () => clearTimeout(timeout);
    // }, [hasError]);

    return { data, setData, isLoading, hasError };
  };

  const {
    data,
    data: { list: forecast },
    isLoading,
    hasError,
  } = useFetch(`${url}${cityId}&units=metric&appid=${ApiKey}`);

  console.log(forecast);
  return (
    <div className={"chart"}>
      {data && <h3>5 day forecast for </h3>}

      <LineChart
        className={"chart-container"}
        width={900}
        height={600}
        data={forecast}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="dt_txt" layout="vertical" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="middle" layout="vertical" align="right" />
        <Line
          type="monotone"
          name={"weather"}
          dataKey={`main.temp`}
          stroke="#8884d8"
        />
      </LineChart>
    </div>
  );
};

export default CityForecast;
