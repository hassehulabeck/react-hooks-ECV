import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Firstname() {
    const [firstname, setFirstname] = useState("Rune");

    const onSubmit = (e) => {
        e.preventDefault();
        setFirstname(e.target.firstname.value);
    };

    return (
        <div>
            <p>{firstname}</p>
            <form onSubmit={onSubmit}>
                <input type="text" name="firstname" />
                <input type="submit" value="Ändra namn" />
            </form>
        </div>
    );
}

ReactDOM.render(<Firstname />, document.getElementById("root"));
