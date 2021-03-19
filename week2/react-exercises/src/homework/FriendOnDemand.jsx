import { useState } from "react";

const Friend = () => {
  const [friend, setFriend] = useState({});
  const getFriend = () => {
    fetch("https://www.randomuser.me/api?results=1")
      .then((res) => res.json())
      .then((friend) => {
        console.log(friend.results[0]);
        setFriend(friend.results[0]);
      });
  };
  return (
    <div>
      <Button getFriend={getFriend} />
      <FriendProfile friend={friend} />
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
        {first} {last}
      </li>
      <li>
        {number} {street}, {city}, {country}
      </li>
      <li>{email}</li>
      <li>{cell}</li>
    </ul>
  );
};

const Button = ({ getFriend }) => {
  return <button onClick={getFriend}> Get a friend</button>;
};

export default Friend;
