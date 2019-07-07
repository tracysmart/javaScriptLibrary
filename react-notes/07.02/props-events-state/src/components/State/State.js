import React from 'react';

const State = () => {
    const [clicks, setClicks] = [10, () => useState(0);

    return(
        <p>{clicks}</p>
        <button onClick={() => setClicks (clicks + 1)}>Set Clicks Button</button>
    )
}

export default State;

/*
Array Destructuring:
const [first, second] = ['zach is amazing', 'brie is awesome', 'goldfish are okay'];
console log(first, second);
*/