import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import { Sort } from "../components/Sort";

export const Home = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="panel">
          <Categories />
          <Sort />
        </div>
        <PizzaBlock />
      </div>
    </div>
  );
};
