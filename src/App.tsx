import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Country from "./interfaces/Country";
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
        const response = await fetch("https://restcountries.com/v3.1/all");
        const result = await response.json();
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
