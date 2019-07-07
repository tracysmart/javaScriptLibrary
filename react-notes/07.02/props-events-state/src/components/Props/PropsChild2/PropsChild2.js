import React from 'react';

const PropsChild2 = ({arrayProp}) => {
    let [first] = arrayProp;
    return(
        <div>
            <p>{first}</p>
        </div>
    )
}

export default PropsChild2;