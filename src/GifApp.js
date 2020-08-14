import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GridGift from "./components/GridGift";

const GifApp = () => {
  
    const [categorias, setCategorias] = useState(['One Piece']);

    return(
        <>
            <h2>Gif App</h2>
            <AddCategory setCategorias={setCategorias}/>
            <hr/>
            <ol>
                {
                    categorias.map ( category => (
                        <GridGift 
                            key={ category }
                            category={ category }
                         />
                    ))
                }
            </ol>
        </>
    );
};

export default GifApp;



//<button onClick={addElement}>Add</button>
    // const addElement = (e) =>{
    //     console.log(e);
    //     // setCategorias([...categorias, 'Rayman']);
    //     setCategorias(catgs => [...catgs, 'Rayman']);
    // }