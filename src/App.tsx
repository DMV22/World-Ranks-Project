import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/home-page";
import CountryDetailsPage from "@/pages/country-details-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/country/:code" element={<CountryDetailsPage />} />
    </Routes>
  );
}

export default App;
