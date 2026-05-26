import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { type Country } from "@/interfaces/Country";
import "./index.css";

function App() {
  const [data, setData] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,population,flags,area,region");
        const result = await response.json();
        result.sort((a: any, b: any) => b.population - a.population)
        setData(result);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Main data={data} isLoading={isLoading} isError={isError} />
      <Footer />
    </div>
  );
}

export default App;
