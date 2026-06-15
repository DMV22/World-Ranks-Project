import { Link } from "react-router-dom";
import type { Country } from "@/interfaces/country";

import styles from "./NeighbourCountries.module.css";

interface NeighbourCountriesProps {
  borders?: string[];
  allCountries: Country[];
}

export default function NeighbourCountries({ borders, allCountries }: NeighbourCountriesProps) {
  const neighbours = borders?.map((code) => allCountries.find((c) => c.codes.alpha_3 === code))
    .filter((c): c is Country => c !== undefined);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Neighbouring Countries</h2>

      {!neighbours || neighbours.length === 0 ? (
        <p className={styles.empty}>No neighbouring countries</p>
      ) : (
        <div className={styles.grid}>
          {neighbours.map((country) => (
            <Link
              key={country.codes.alpha_3}
              to={`/country/${country.codes.alpha_3}`}
              className={styles.card}
            >
              <img
                src={country.flag.url_png}
                alt={country.flag.description || `Flag of ${country.names.common}`}
                className={styles.flag}
              />
              <span className={styles.name}>{country.names.common}</span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}