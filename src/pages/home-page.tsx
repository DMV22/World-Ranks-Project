import { useMemo } from "react";
import Header from "@/components/header";
import CountryList from "@/components/country-list";
import FiltersSidebar from "@/components/filters-sidebar";
import PaginationBtn from "@/components/pagination";
import Footer from "@/components/footer";

import { useCountries } from "@/hooks/use-country";
import useCountryFilters from "@/hooks/use-country-filters";
import { usePagination } from "@/hooks/use-pagination";
import { useDebounce } from "@/hooks/use-debounce";

import { filterCountries } from "@/utils/filter-countries";

import styles from "./HomePage.module.css";

const ITEMS_PER_PAGE = 12;

function HomePage() {
  const { countries, isLoading, isError } = useCountries();
  const { filters, updateFilter } = useCountryFilters();

  const debouncedSearch = useDebounce(filters.search, 400);

  const debounceFilters = useMemo(() => ({ ...filters, search: debouncedSearch }),
    [filters, debouncedSearch]
  )

  const filteredCountries = useMemo(() => filterCountries(countries, debounceFilters),
    [countries, debounceFilters]
  );

  const { totalPages, currentPage, paginatedCountries, goNext, goPrev } =
    usePagination({ items: filteredCountries, itemsPerPage: ITEMS_PER_PAGE });

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.contentShell}>
        <section className={styles.panel}>
          <div className={styles.layout}>
            <FiltersSidebar
              filters={filters}
              updateFilter={updateFilter}
              totalCountries={filteredCountries.length}
            />

            <div className={styles.mainContent}>
              <CountryList
                data={paginatedCountries}
                isLoading={isLoading}
                isError={isError}
              />

              {!isLoading && !isError && (
                <PaginationBtn
                  currentPage={currentPage}
                  totalPages={totalPages}
                  goNext={goNext}
                  goPrev={goPrev}
                />
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;