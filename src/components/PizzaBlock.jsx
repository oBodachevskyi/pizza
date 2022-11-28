import { useState, useEffect } from "react";
import PizzaItem from "./PizzaItem";
import { useSelector } from "react-redux";

const PizzaBlock = () => {
  const { categoryId, sort } = useSelector((state) => state.filter);

  const [arrayOfPizzaz, setArrayOfPizzaz] = useState([]);
  const url = `https://6381b6c353081dd5498712ba.mockapi.io/pizzas?sortBy=${
    sort.sortPropperty
  }&order=${sort.sortType}${categoryId !== 0 ? `&category=${categoryId}` : ""}`;

  console.log(categoryId);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setArrayOfPizzaz(res));
  }, [url]);

  return (
    <div className="pizza-block">
      {arrayOfPizzaz.map((pizza, index) => (
        <PizzaItem item={pizza} key={index} />
      ))}
    </div>
  );
};

export default PizzaBlock;
