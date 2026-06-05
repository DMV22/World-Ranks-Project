import styles from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  goPrev: () => void;
  goNext: () => void;
}

function Pagination({
  currentPage,
  totalPages,
  goPrev,
  goNext,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <button
        type="button"
        onClick={goPrev}
        disabled={currentPage === 1}
        className={styles.button}
        aria-label="Go to previous page"
      >
        Назад
      </button>

      <span className={styles.info} aria-live="polite">
        Сторінка <strong className={styles.current}>{currentPage}</strong> з {totalPages}
      </span>

      <button
        type="button"
        onClick={goNext}
        disabled={currentPage === totalPages}
        className={styles.button}
        aria-label="Go to next page"
      >
        Вперед
      </button>
    </nav>
  );
}

export default Pagination;