import "./App.scss";
import Routes from "./routes";
import { BreweriesProvider } from "./context/breweries";

function App() {
  return (
    <BreweriesProvider>
      <Routes />
    </BreweriesProvider>
  );
}

export default App;
