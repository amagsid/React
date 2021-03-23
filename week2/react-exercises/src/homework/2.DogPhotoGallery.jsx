import { useState } from "react";
import { VscLoading } from "react-icons/vsc";

const DogGallery = () => {
  const [dogPhoto, setDogPhoto] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const getDogPhoto = () => {
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        setDogPhoto((prevArr) => [...prevArr, data.message]);
        setLoading(false);
      })
      .catch((err) => setError(err));
  };

  return (
    <div className="container dog">
      {isLoading && <VscLoading size={50} className="loading" />}

      {dogPhoto.length === 0 && <h3> Click to get your first dog</h3>}

      <Button getDogPhoto={getDogPhoto} />

      {hasError && <p>something went wrong</p>}

      <div className="dog-photos">
        {dogPhoto.map((photo) => (
          <DogPhoto photo={photo} />
        ))}
      </div>
    </div>
  );
};

//dog photo component
const DogPhoto = ({ photo }) => {
  return <img className="dog-photo" src={photo} alt="doggie" />;
};

//button component
const Button = ({ getDogPhoto }) => {
  return (
    <button
      className="btn"
      onClick={() => {
        getDogPhoto();
      }}
    >
      Get a dog!
    </button>
  );
};

export default DogGallery;
