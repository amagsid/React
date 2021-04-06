import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import moment from "moment";
import Feedback from "./Feedback";

const CityForecast = () => {
  const { cityId } = useParams();
  const url = `http://api.openweathermap.org/data/2.5/forecast?id=`;
  const ApiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  const useFetch = (url) => {
    const [data, setData] = useState({});
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
    useEffect(() => {
      const timeout = setTimeout(() => {
        setError(null);
      }, 2000);

      return () => clearTimeout(timeout);
    }, [hasError]);

    return { data, isLoading, hasError };
  };

  const {
    data: { list: forecast },
    isLoading,
    hasError,
  } = useFetch(`${url}${cityId}&units=metric&appid=${ApiKey}`);

  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };

  //formatting the date for X axis
  function formatXAxis(tickItem) {
    return moment(tickItem).format("MMM Do");
  }

  return (
    <>
      <button className={"back-botton"} onClick={goHome}>
        <RiArrowGoBackLine> </RiArrowGoBackLine> <span> Go back </span>
      </button>
      <div className={"chart"}>
        {isLoading && <Feedback className={"loading"} loading={true} />}
        {/* {data ? <h3>5 day forecast for </h3> : null} */}

        <ResponsiveContainer width={"100%"} height={600}>
          <AreaChart className={"chart-container"} data={forecast}>
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis
              dataKey="dt_txt"
              tickFormatter={formatXAxis}
              angle={-35}
              textAnchor="end"
            />
            <YAxis />
            <Tooltip />
            <Legend wrapperStyle={{ position: "relative" }} />
            <Area
              type="monotone"
              name={"degree in celcius"}
              dataKey={`main.temp`}
              stroke="#35d689"
            />
          </AreaChart>
        </ResponsiveContainer>
        {/* error hndlling */}
        {hasError && hasError.status === 404 && (
          <Feedback
            className={"feedbcak error"}
            text={"Something went wrong"}
          />
        )}
      </div>
    </>
  );
};

export default CityForecast;
