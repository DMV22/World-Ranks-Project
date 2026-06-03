import type { FilterState, SortOption } from "@/interfaces/country-filters";
import { REGIONS, type Region } from "@/constants/regions";
import styles from "./FiltersSidebar.module.css";

interface FiltersSidebarProps {
  filters: FilterState;
  updateFilter: <K extends keyof FilterState>(
    key: K,
    value: FilterState[K]
  ) => void;
}

export default function FiltersSidebar({ filters, updateFilter }: FiltersSidebarProps) {
  const handleRegionToggle = (region: Region) => {
    const exists = filters.region.includes(region);

    updateFilter(
      "region",
      exists
        ? filters.region.filter((item) => item !== region)
        : [...filters.region, region]
    );
  };

  return (
    <aside className={styles.sidebar}>
      {/* Sort */}
      <div className={styles.section}>
        <label htmlFor="sort-by" className={styles.fieldLabel}>
          Sort by
        </label>

        <div className={styles.selectWrapper}>
          <select
            id="sort-by"
            value={filters.sortBy}
            onChange={(e) => updateFilter("sortBy", e.target.value as SortOption)}
            className={styles.select}
          >
            <option value="population">Population</option>
            <option value="area">Area</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.fieldLabel}>Region</h3>

        <div className={styles.regions} role="group" aria-label="Filter by region">
          {REGIONS.map((region) => {
            const active = filters.region.includes(region);

            return (
              <button
                key={region}
                type="button"
                onClick={() => handleRegionToggle(region)}
                className={`${styles.regionButton} ${active ? styles.regionButtonActive : ""
                  }`}
                aria-pressed={active}
              >
                {region}
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.fieldLabel}>Status</h3>

        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={filters.unMember}
              onChange={(e) => updateFilter("unMember", e.target.checked)}
              className={styles.checkboxInput}
            />
            <span className={styles.checkboxControl} aria-hidden="true" />
            <span className={styles.checkboxText}>Member of the United Nations</span>
          </label>

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={filters.independent}
              onChange={(e) => updateFilter("independent", e.target.checked)}
              className={styles.checkboxInput}
            />
            <span className={styles.checkboxControl} aria-hidden="true" />
            <span className={styles.checkboxText}>Independent</span>
          </label>
        </div>
      </div>
    </aside>
  );
}
