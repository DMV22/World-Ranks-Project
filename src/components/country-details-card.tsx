import { Link } from "react-router-dom";
import NeighbourCountries from "@/components/neighbour-countries";
import { type Country } from "@/interfaces/country";

import styles from "./CountryDetailsCard.module.css";

interface CountryDetailsCardProps {
  country: Country | null | undefined;
  allCountries: Country[];
  isLoading: boolean;
  isError: boolean;
}

function formatList(items?: string[]): string {
  if (!items || items.length === 0) return "N/A";
  return items.join(", ");
}

export default function CountryDetailsCard({
  country,
  allCountries,
  isLoading,
  isError,
}: CountryDetailsCardProps) {
  
  if (isLoading) {
    return <div className={styles.state}>Loading country details...</div>;
  }

  if (isError) {
    return (
      <div className={styles.state}>
        Something went wrong. Please try again later.
      </div>
    );
  }

  if (!country) {
    return <div className={styles.state}>Country not found.</div>;
  }
  
  return (
    <article className={styles.card}>
      <Link to="/" className={styles.backLink}>
        ← Back
      </Link>

      <div className={styles.flagBlock}>
        <img
          src={country.flag.url_png}
          alt={country.flag.description || `Flag of ${country.names.common}`}
          className={styles.flag}
        />
      </div>

      <header className={styles.header}>
        <h1 className={styles.title}>{country.names.common}</h1>
        <p className={styles.subtitle}>{country.names.official}</p>
      </header>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Population</span>
          <span className={styles.statValue}>
            {country.population.toLocaleString("en-US")}
          </span>
        </div>

        <div className={styles.stat}>
          <span className={styles.statLabel}>Area (km²)</span>
          <span className={styles.statValue}>
            {country.area?.kilometers != null
              ? country.area.kilometers.toLocaleString("en-US")
              : "N/A"}
          </span>
        </div>
      </div>

      <dl className={styles.detailsList}>
        <div className={styles.detailsRow}>
          <dt>Capital</dt>
          <dd>{formatList(country.capitals?.map((c) => c.name))}</dd>
        </div>

        <div className={styles.detailsRow}>
          <dt>Subregion</dt>
          <dd>{country.subregion || "N/A"}</dd>
        </div>

        <div className={styles.detailsRow}>
          <dt>Language</dt>
          <dd>{formatList(country.languages?.map((l) => l.name))}</dd>
        </div>

        <div className={styles.detailsRow}>
          <dt>Currencies</dt>
          <dd>{formatList(country.currencies?.map((c) => c.name))}</dd>
        </div>

        <div className={styles.detailsRow}>
          <dt>Continents</dt>
          <dd>{formatList(country.continents)}</dd>
        </div>
      </dl>

      <NeighbourCountries
        borders={country.borders}
        allCountries={allCountries}
      />
    </article>
  );
}