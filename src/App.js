import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Weather from './components/Weather'
import "normalize.css";
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <div className="App">
       <GlobalStyles />
       <Header />
       <Weather />
       <Footer />
    </div>
  );
}

export default App;
