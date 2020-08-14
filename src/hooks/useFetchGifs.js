import { getGifts } from "../helpers/getGifs";

const { useState, useEffect } = require("react");

export const useFetchGifs = ( category ) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  //   Esto es como el componentDidMount() -> clases
  useEffect(() => {
    getGifts( category )
            .then( imgs => {
                
                setTimeout( () =>{

                
                setState({
                    data: imgs,
                    loading: false
                })

                }, 3000)
            } )
  }, [category]);

//   setTimeout(() => {
//     setState(
//       {
//         data: [1, 2, 3, 4, 5],
//         loading: false,
//       },
//       3000
//     );
//   });

  return state; // data:[], loading: true
};
