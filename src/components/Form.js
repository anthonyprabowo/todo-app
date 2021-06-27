import React from 'react';
import Button from './Button.js';

const Form = (props) => {
  const {
    setInputValue,
    inputValue,
    handleAdd
  } = props;
  return(
    <form>
      <input autoFocus type="text" placeholder="Add a task" onChange={e => setInputValue(e.target.value)} value={inputValue} />
      <Button handleAdd={handleAdd} />
    </form>
  )
}

export default Form;