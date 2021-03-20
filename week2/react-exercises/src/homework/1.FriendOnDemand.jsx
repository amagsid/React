import { useState, useEffect } from "react";

const Friend = () => {
  const [friend, setFriend] = useState(null);
  const [friendEmoji, setFriendEmoji] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const getFriend = () => {
    setLoading(true);
    fetch("https://www.randomuser.me/api?results=1")
      .then((res) => res.json())
      .then((friend) => {
        setFriend(friend.results[0]);
        setFriendEmoji((prevArr) => [...prevArr, "🙋🏻‍♂️"]);
        setLoading(false);
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {
    getFriend();
  }, [clickCount]);

  return (
    <div className="container friends">
      <Button setClickCount={setClickCount} clickCount={clickCount} />
      {isLoading && <p className="loading"> loading...</p>}
      {hasError && <p> something went wrong</p>}
      {friend && <FriendProfile friend={friend} />}

      <p>
        {clickCount == 0
          ? `You already got 1 freind`
          : `by now you have ${clickCount + 1} friends`}
      </p>

      <div className="friend-emoji">
        {friendEmoji.map((emo) => (
          <span>{emo} </span>
        ))}
      </div>
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
        <span> Name:</span> {first} {last}
      </li>
      <li>
        <span> Address: </span> {number} {street}, {city}, {country}
      </li>
      <li>
        <span> email: </span> {email}
      </li>
      <li>
        <span> phone number:</span> {cell}
      </li>
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
