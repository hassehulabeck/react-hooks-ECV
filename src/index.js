import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Firstname(props) {
    const [firstname, setFirstname] = useState(props.firstname);

    const nameSubmitted = (e) => {
        e.preventDefault();
        setFirstname(e.target.firstname.value);
    };

    const nameChanger = (e) => {
        if (e.target.value.length > 3) {
            firstname = e.target.value;
            setFirstname(e.target.value);
        }
    };

    return (
        <div>
            <p>{firstname}</p>
            <form onSubmit={nameSubmitted}>
                <input
                    type="text"
                    name="firstname"
                    onChange={(e) => nameChanger(e)}
                />
                <input type="submit" value="Ändra namn" />
            </form>
        </div>
    );
}

ReactDOM.render(
    <Firstname firstname="Rune" />,
    document.getElementById("root")
);
