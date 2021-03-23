import { useState, useEffect } from "react";
import { VscLoading } from "react-icons/vsc";

const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const GetJoke = () => {
    setLoading(true);
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((joke) => {
        setJoke(joke);
        setLoading(false);
      })
      .catch((err) => setError(err));
    setLoading(false);
  };

  useEffect(() => {
    GetJoke();
  }, []);

  return (
    <div className="container joke">
      {joke && <Joke joke={joke} isLoading={isLoading} hasError={hasError} />}
    </div>
  );
};

const Joke = ({ joke: { punchline, setup, isLoading, hasError } }) => {
  return (
    <div>
      {isLoading && <VscLoading size={50} className="loading" />}
      {hasError && <p> there was an error</p>}
      <h3>Here's a random joke:</h3>
      <p className="joke-lines"> {setup} </p>
      <p className="joke-lines"> {punchline} </p>
    </div>
  );
};

export default RandomJoke;
