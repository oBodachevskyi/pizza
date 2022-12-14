import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPizzaToCart } from "../redux/slises/cartSlice"

const PizzaItem = ({ item }) => {
  const typesArray = ["тонкое", "традиционное"];


  const [pizzaCount, setPizzaCount] = useState(0);
  const [sizeValue, setSizeValue] = useState(0);
  const [typeValue, setTypeValue] = useState(0);
  const dispatch = useDispatch()

  const handleAddPizzaToCart = () => {
    setPizzaCount(pizzaCount + 1)
    dispatch(addPizzaToCart({
      ...item,
      sizes: sizeValue,
      types: sizeValue,
       key: String(item.id) + item.title + String(sizeValue) + String(sizeValue)
    }))
  }

  return (
      <>
          
      <div className="pizza-item" key={item.id}>
        <img
          className="pizza-item__image"
          src={item.imageUrl}
          alt={item.title}
        />
        <h4 className="pizza-item__title">{item.title}</h4>
        <div className="pizza-item__selector">
          <ul>
            {item.types.map((type, index) => (
              <li
                key={type}
                className={index === typeValue ? "active" : ""}
                onClick={() => setTypeValue(type)}
              >
                {typesArray[type]}
              </li>
            ))}
          </ul>
          <ul>
            {item.sizes.map((size, index) => (
              <li
                key={index}
                className={index === sizeValue ? "active" : ""}
                onClick={() => setSizeValue(index)}
              >
                {size} см
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-item__bottom">
          <div className="pizza-item__price">{item.price} ₽</div>
          <button
            className="button button--outline button--add"
            onClick={handleAddPizzaToCart}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>{pizzaCount}</i>
          </button>
        </div>
      </div>
    </>
  );
};

export default PizzaItem;
