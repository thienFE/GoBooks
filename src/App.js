import { Provider } from "react-redux";
import "./App.scss";
import Book from "./components/Book/Book";
import Logo from "./components/Logo/Logo";
import SearchZone from "./components/SearchZone/SearchZone";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Logo />
        <SearchZone />
        <Book />
      </Provider>
    </div>
  );
}

export default App;
