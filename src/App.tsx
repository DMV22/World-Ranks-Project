import { useMemo } from "react";
import Header from "@/components/header";
import CountryList from "@/components/country-list";
import FiltersSidebar from "./components/filters-sidebar";
import Footer from "@/components/footer";

import { useCountries } from "@/hooks/use-country";
import useCountryFilters from "@/hooks/use-country-filters";

import { filterCountries } from "@/utils/filter-countries";

import styles from "./App.module.css";

function App() {
  const { countries, isLoading, isError } = useCountries();
  const { filters, updateFilter } = useCountryFilters();

  const filteredCountries = useMemo(() => filterCountries(countries, filters),
    [countries, filters]
  );

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.contentShell}>
        <section className={styles.panel}>
          <div className={styles.layout}>
            <FiltersSidebar
              filters={filters}
              updateFilter={updateFilter}
            />

            <div className={styles.mainContent}>
              <CountryList
                data={filteredCountries}
                isLoading={isLoading}
                isError={isError}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
