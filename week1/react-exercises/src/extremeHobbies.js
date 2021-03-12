"use strict";

const Hobbies = ({ hobby }) => <h3> {hobby} </h3>;

const HobbyList = () => {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  return hobbies.map((hobby, index) => <Hobbies key={index} hobby={hobby} />);
};

export default HobbyList;
