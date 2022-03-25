import Country from "./components/Country";
import allCountryScores from "./constants/scores";
import './styles/style.css';

function App() {
  return (
    <div className="App">
      <h1> High Scores per Country</h1>
      <ul>
        {allCountryScores.map(country => 
          <Country key={country.name} name={country.name} scores={country.scores} />
          )}
      </ul>
    </div>
  );
}

export default App;
