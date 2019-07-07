import React from 'react';

const Props = (props) => {
  return(
    <div>
      <p>{props.str}</p>
      <h5>{props.num}</h5>
      <ol>
        <li>{props.arr[0]}</li>
        <li>{props.arr[1]}</li>
        <li>{props.arr[2]}</li>
      </ol>
    </div>
  )
}

export default Props;