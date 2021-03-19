// import { useState, useEffect } from "react";

// const FetchDoggies = () => {
//   const [hasError, setError] = useState(false);
//   const [isLoading, setLoading] = useState(false);
//   const [dogPic, setDogPic] = useState("");

//   const [buttonClickCOunt, setbuttonClickCOunt] = useState(0);
//   const dogURL = `https://dog.ceo/api/breeds/image/random`;

//   const FetchData = (url) => {
//     setLoading(true);
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         setDogPic(data.message);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     FetchData(dogURL);
//   }, [buttonClickCOunt]);

//   return (
//     <div className="doggies component">
//       <h1> Fetch me Doggies</h1>
//       <button
//         className="btn"
//         onClick={() => setbuttonClickCOunt(buttonClickCOunt + 1)}
//       >
//         fetch me doggies
//       </button>

//       {isLoading && <p> Loading image... </p>}
//       {!hasError && <img className="dog-pic" src={dogPic} alt="doggies" />}

//       {hasError && <p> something went wrong</p>}
//     </div>
//   );
// };

// export default FetchDoggies;

import { useState, useEffect } from "react";

const DogGallery = () => {
  const [dogPhoto, setDogPhoto] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const getDogPhoto = () => {
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log("firing from fetch");
        console.log(data.message);
        setDogPhoto(dogPhoto.push(data.message));
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {
    getDogPhoto();
    console.log(clickCount);
  }, [clickCount]);

  return (
    <div className="container">
      <Button setClickCount={setClickCount} clickCount={clickCount} />
    </div>
  );
};

const DogPhoto = () => {};

const Button = ({ setClickCount, clickCount }) => {
  return (
    <button
      className="btn"
      onClick={() => {
        setClickCount(clickCount + 1);
      }}
    >
      Get a dog
    </button>
  );
};

export default DogGallery;
