import { useState, useEffect } from "react";

const Friend = () => {
  const [friend, setFriend] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [clickCount, setClickCount] = useState({});

  const getFriend = () => {
    setLoading(true);
    fetch("https://www.randomuser.me/api?results=1")
      .then((res) => res.json())
      .then((friend) => {
        setFriend(friend.results[0]);
        setLoading(false);
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {
    getFriend();
  }, [clickCount]);

  return (
    <div className="container">
      <Button setClickCount={setClickCount} clickCount={clickCount} />
      {isLoading && <p> loading...</p>}
      {hasError && <p> something went wrong</p>}
      {friend && <FriendProfile friend={friend} />}
    </div>
  );
};

const FriendProfile = ({
  friend: {
    name: { first, last },
    location: {
      city,
      country,
      street: { name: street, number },
    },
    email,
    cell,
  },
}) => {
  return (
    <ul>
      <li>
        Name: {first} {last}
      </li>
      <li>
        Address: {number} {street}, {city}, {country}
      </li>
      <li>email: {email}</li>
      <li>phone number: {cell}</li>
    </ul>
  );
};

const Button = ({ setClickCount, clickCount }) => {
  return (
    <button className="btn" onClick={() => setClickCount(clickCount + 1)}>
      Get a friend
    </button>
  );
};

export default Friend;
