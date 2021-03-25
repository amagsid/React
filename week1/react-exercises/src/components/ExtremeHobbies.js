const Hobbies = ({ hobby }) => <h3> {hobby} </h3>;

const HobbyList = () => {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];

  return (
    <div className="hobbies">
      {hobbies.map((hobby, index) => (
        <Hobbies key={index} hobby={hobby} />
      ))}
    </div>
  );
};

export default HobbyList;
