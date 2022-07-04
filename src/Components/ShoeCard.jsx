import React from "react";

const ShoeCard = ({id,name,image,category}) => {
  let shoeId = {id};
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`}  >
      <div>
        <img data-cy="shoe-card-image" src={image} alt={name}  width="100px"/>
      </div>
      <div>
        <div data-cy="shoe-name">{name}</div>
        <div data-cy="shoe-category">{category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;