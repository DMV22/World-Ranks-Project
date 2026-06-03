import { type Country } from "@/interfaces/country";
import styles from "./CountryList.module.css";

interface CountryListProps {
  data: Country[];
  isLoading: boolean;
  isError: boolean;
}

function CountryList({ data, isLoading, isError }: CountryListProps) {
  if (isError) {
    return (
      <main className={styles.wrapper}>
        <div>Something went wrong. Please try again later.</div>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className={styles.wrapper}>
        <div>Loading ...</div>
      </main>
    );
  }

  if (data.length === 0) {
    return (
      <main className={styles.wrapper}>
        <div>No countries match current filters.</div>
      </main>
    );
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.tableScroller}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.flagCell}>Flag</th>
              <th>Name</th>
              <th>Population</th>
              <th>Area (km²)</th>
              <th className={styles.hideOnMobile}>Region</th>
            </tr>
          </thead>

          <tbody>
            {data.map((country) => (
              <tr key={country.cca3}>
                <td className={styles.flagCell}>
                  <img
                    src={country.flags.png}
                    alt={country.name.common}
                    className={styles.flag}
                  />
                </td>

                <td className={styles.nameCell}>{country.name.common}</td>
                <td>{country.population.toLocaleString("en-US")}</td>
                <td>
                  {country.area != null
                    ? country.area.toLocaleString("en-US")
                    : "N/A"}
                </td>
                <td className={styles.hideOnMobile}>{country.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default CountryList;
