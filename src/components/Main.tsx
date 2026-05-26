import { type Country } from "@/interfaces/Country";
interface MainProps {
  data: Country[];
  isLoading: boolean;
  isError: boolean;
}

function Main({ data, isLoading, isError }: MainProps) {
  return (
    <main className="main container">
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <table className="country-table">
          <thead>
            <tr>
              <th>Flag</th>
              <th>Name</th>
              <th>Population</th>
              <th>Area (km²)</th>
              <th>Region</th>
            </tr>
          </thead>
          <tbody>
            {data.map((country, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={country.flags.png}
                    alt={country.name.common}
                    style={{
                      width: "70px",
                      height: "50px",
                      borderRadius: "6px",
                    }}
                  />
                </td>
                <td>{country.name.common}</td>
                <td>{country.population.toLocaleString('en-US')}</td>
                <td>{country.area.toLocaleString('en-US')}</td>
                <td>{country.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

export default Main;
