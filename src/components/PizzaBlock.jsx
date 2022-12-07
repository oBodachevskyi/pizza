import { useState, useEffect } from "react";
import PizzaItem from "./PizzaItem";
import { useSelector } from "react-redux";
import { pizzas } from "../assets/pizza";




const PizzaBlock = () => {
  const { categoryId, sort } = useSelector((state) => state.filter);
  const [arrayOfPizzaz, setArrayOfPizzaz] = useState([]);
  const url = `https://6381b6c353081dd5498712ba.mockapi.io/`;
  const urlParams = `pizzas?sortBy=${
    sort.sortPropperty
  }&order=${sort.sortType}${categoryId !== 0 ? `&category=${categoryId}` : ""}`

  useEffect(() => {
    fetch(url+urlParams)
      .then((res) => res.json())
      .then((res) => setArrayOfPizzaz(res));

    setArrayOfPizzaz(pizzas)
   
  }, [url, urlParams]);

  return (
    <div className="pizza-block">
      {arrayOfPizzaz.map((pizza, index) => (
        <PizzaItem item={pizza} key={index} />
      ))}
    </div>
  );
};

export default PizzaBlock;
