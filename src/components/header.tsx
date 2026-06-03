import Banner from "@/images/hero-image.jpg";
import Logo from "@/images/logo.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img src={Banner} alt="Banner" className={styles.banner} aria-hidden="true" />
      <img src={Logo} alt="World Ranks logo" className={styles.logo} />
    </header>
  );
}

export default Header;
