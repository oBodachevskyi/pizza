import "./scss/app.scss";
import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import PizzaBlock from "./components/PizzaBlock";


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Categories />
          <PizzaBlock   />
        </div>
      </div>
    </div>
  );
}

export default App;
