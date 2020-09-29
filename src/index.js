import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState("");
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then((res) => {
                setLoad(true);
                setCountries(res.data);
                console.log("Laddar listan");
            })
            .catch((err) => {
                setError(err.message);
                setLoad(true);
            });
    }, []);
    // Tom array innebär att useEffect bara körs en gång - vid sidans laddning.

    const sortCountries = () => {
        let sCountries = [...countries];
        sCountries.sort((a, b) => {
            return b.population - a.population;
        });
        setCountries(sCountries);
    };

    if (load) {
        return (
            <div>
                <p>Antal klick: {counter}</p>
                <button onClick={sortCountries}>Sortera</button>
                <ol>
                    {error ? (
                        <li>{error.message}</li>
                    ) : (
                        countries.map((country, index) => (
                            <li key={index}>
                                {country.name} ({country.population})
                            </li>
                        ))
                    )}
                </ol>
            </div>
        );
    } else {
        return <div>Laddar...</div>;
    }
};

ReactDOM.render(<CountryList />, document.getElementById("root"));
