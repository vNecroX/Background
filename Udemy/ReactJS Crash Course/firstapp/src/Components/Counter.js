import React, { useState, useEffect } from "react";
import "../Counter.css";

function Counter() {
    let count = 0;

    const [currentState, updtateState] = useState(count);
    const handleClick = () => {
        updtateState(currentState + 1);
    };

    useEffect(() => {
        window.alert('I am clicked');
    });

    return (
        <>
            <div className="counter-parent">
                <div className="main-div">
                    <h3>Counter</h3>
                    <button onClick={handleClick}>{currentState}</button>
                </div>
            </div>
        </>
    );
}

export default Counter