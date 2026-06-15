import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <span className={styles.footerCopy}>
          &copy; {new Date().getFullYear()} Country Finder. All rights reserved.
        </span>

        <div className={styles.footerLinks}>
          <span>
            Powered by <a href="https://restcountries.com" target="_blank" rel="noreferrer" className={styles.footerLink}>REST Countries API</a>
          </span>
          <span className={styles.footerDivider}>|</span>
          <span>
            Developed by <a href="https://github.com/DMV22" target="_blank" rel="noreferrer" className={styles.footerLink}>Max Dyvnych</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;