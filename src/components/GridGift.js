import React from "react";
import GridGiftItem from "./GridGiftItem";
// import { getGifts } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GridGift = ({ category }) => {
  //   const [count, setCount] = useState(0);
  // const [img, setImg] = useState([]);
  const { data:images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        <div className="card-grid animate__animated animate__fadeInUp">
        { loading && <p className="animate__animated animate__flash">Loading...</p> }
          {
            images.map((image) => (
              <GridGiftItem key={image.id} {...image} />
          ))
        }
        </div>
      }
    </>
  );
};

export default GridGift;

// <h5>{count}</h5>
// <button onClick={() => setCount(count + 1)}> + 1 </button>
// img.map( ({id, title}) => (
//     <h4 key={id}>{title}</h4>
//   ))
