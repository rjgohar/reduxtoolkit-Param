import logo from "./logo.svg";
import "./App.css";
import Nav from "./Routes";
import { store } from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Nav />
      </Provider>
    </div>
  );
}

export default App;
