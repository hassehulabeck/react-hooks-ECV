import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Multiplikator() {
    const [numbers, setNumbers] = useState([4, 3]);
    const [produkt, setProdukt] = useState(0);

    return (
        <div>
            <p>
                {numbers[0]} och {numbers[1]}
            </p>
            <p>{produkt}</p>
            <button onClick={() => setProdukt(numbers[0] * numbers[1])}>
                Multiplicera
            </button>
        </div>
    );
}

ReactDOM.render(<Multiplikator />, document.getElementById("root"));
