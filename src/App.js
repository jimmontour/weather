import Weather from './components/Weather'
import "normalize.css";
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <div className="App">
       <GlobalStyles />
       <Weather />
    </div>
  );
}

export default App;
