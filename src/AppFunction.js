import React, { useState } from 'react';

function AppFunction(props) {
    const [count, setCount] = useState(0); 

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count -1);
    }

    return (
        <>
            <button onClick={incrementCount}>The count is: {count}</button>
            <br />
            <br />
            <button onClick={decrementCount}>Lower the count</button>
        </>
    );
}

export default AppFunction;