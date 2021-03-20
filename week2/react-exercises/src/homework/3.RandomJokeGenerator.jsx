import { useState, useEffect } from "react";

const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [clickCount, setClickCount] = useState({});

  const GetJoke = () => {
    setLoading(true);
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((joke) => {
        setJoke(joke);
        setLoading(false);
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {
    console.log(joke);
    GetJoke();
  }, []);

  return <div className="container joke">{joke && <Joke joke={joke} />}</div>;
};

const Joke = ({ joke: { punchline, setup } }) => {
  return (
    <div>
      <h3>Here's a random joke:</h3>
      <p className="joke-lines"> {setup} </p>
      <p className="joke-lines"> {punchline} </p>
    </div>
  );
};

export default RandomJoke;
