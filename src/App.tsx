import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { useCountries } from "@/hooks/useCountry";
import "./index.css";


function App() {
  const { countries, isLoading, isError } = useCountries();

  return (
    <div className="App">
      <Header />
      <Main data={countries} isLoading={isLoading} isError={isError} />
      <Footer />
    </div>
  );
}

export default App;
