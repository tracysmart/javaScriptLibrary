import React from 'react';
import EHChild from './EHChild/EHChild';
const EventHandlers = () => {
    function reference(event){
        console.log(event.target.id);
    }
    //make a 2nd function here
    function funkyLog(){
        console.log('bunnies');
    }

    return(
        <div>
            <button id="reference button" onClick={reference}>Reference Function</button>
            <button id="inline button" onClick={(e) => console.log(e.target.id)}>Inline Function </button>
            <EHChild refProp={reference} bunnyProp={funkyLog} 
        </div>
    )
}

export default EventHandlers;