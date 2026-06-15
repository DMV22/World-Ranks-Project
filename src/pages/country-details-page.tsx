import { useParams } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CountryDetailsCard from "@/components/country-details-card";

import { useCountryDetails } from "@/hooks/use-country-details";

import styles from "@/pages/CountryDetailsPage.module.css";

export default function CountryDetailsPage() {
  const { code } = useParams<{ code: string }>();
  const { country, countries, isLoading, isError } = useCountryDetails(code);

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <CountryDetailsCard country={country} allCountries={countries} isLoading={isLoading} isError={isError} />
      </main>

      <Footer />
    </div>
  );
}