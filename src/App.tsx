import Header from "@/components/header";
import Main from "@/components/country-list";
import Footer from "@/components/footer";
import { useCountries } from "@/hooks/use-country";
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
