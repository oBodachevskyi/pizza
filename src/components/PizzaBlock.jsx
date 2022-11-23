import obj from "./db.json";
import PizzaItem from "./PizzaItem";

const PizzaBlock = (props) => {
  const arrayOfPizzaz = obj;

  return (
    <div className="pizza-block">
      {arrayOfPizzaz.map((pizza, index) => (
        <PizzaItem item={pizza} key={index } />
      ))}
    </div>
  );
};

export default PizzaBlock;
