import React, { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState('');

  const inputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 5) {
      setCategorias((c) => [inputValue, ...c ]);
      setInputValue('');
    }else{
        // console.log('L a categoria debe de ser mayor a 5 palabras')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Category</h2>
      <input type="text" value={inputValue} onChange={inputChange} />
    </form>
  );
};

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default AddCategory;
