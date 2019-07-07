import React from 'react';

const EventHandlers = () => {
  function setDocumentTitle(){
    document.title = Math.random()*100
  }
  return(
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6P_LGJqnsaezCldK5jgNQLlXXrQ_Lp5a-HVNNVs1gChZt3BU' onMouseOver={() => console.log('we moused over')} onMouseLeave={setDocumentTitle}/>
  )
}

export default EventHandlers;

//console.log(e.nativeEvent);