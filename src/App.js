import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/" exact>
          <Home />

        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;

