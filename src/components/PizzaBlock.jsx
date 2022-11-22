import obj from "./db.json";
import PizzaItem from "./PizzaItem";

const PizzaBlock = (props) => {
  const arrayOfPizzaz = obj;

  return (
    <div className="pizza-block">
      {arrayOfPizzaz.map((pizza) => (
        <PizzaItem item={pizza} />
      ))}
    </div>
  );
};

export default PizzaBlock;
