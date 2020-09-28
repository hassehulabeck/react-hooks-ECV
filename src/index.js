import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Multiplikator() {
    const numbers = [4, 3];
    const [total, setTotal] = useState(0);

    function calculate() {
        setTotal(numbers[0] * numbers[1]);
    }

    return (
        <div>
            <p>
                {numbers[0]} och {numbers[1]}
            </p>
            <p>{total}</p>
            <button onClick={() => calculate()}>Multiplicera</button>
        </div>
    );
}

ReactDOM.render(<Multiplikator />, document.getElementById("root"));
