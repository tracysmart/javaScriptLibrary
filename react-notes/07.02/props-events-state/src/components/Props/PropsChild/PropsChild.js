import React from 'react';

const PropsChild = (props) => {
  return(
    <div>
      <p>{props.favHero}</p>
      <h1>{props.favIceCream}</h1>
      <span>{props.favNumber}</span>
      {props.children}
      <p>{props.favArray[1]}</p>
      <span>{props.favObject.propertyB}</span>
    </div>
  )
}

export default PropsChild;



