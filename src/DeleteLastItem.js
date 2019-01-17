import React from 'react';

const DeleteLastItem = (props) => {
  return(
      <button onClick={props.deleteLastItem} disabled={props.noItemsFound}>
      	Delete Last Item
      </button>
  );
}

export default DeleteLastItem;