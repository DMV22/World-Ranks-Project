import React from "react";
import Country from "../interfaces/Country";
import "../index.css";

interface MainProps {
  data: Country[];
  isLoading: boolean;
  isError: boolean;
}

function Main({ data, isLoading, isError }: MainProps) {
  return (
    <main className="main-container">
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul className="link-list">
          {data.map((country, index) => (
            <li key={index} className="link-card">
              <img src={country.flags.png} alt={country.name.common} />
              <div>
                <h2 className="link-title">{country.name.common}</h2>
                <p>Population: {country.population}</p>
                <p>Area (km²): {country.area}</p>
                <p>Region: {country.region}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Main;
