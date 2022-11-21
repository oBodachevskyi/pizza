import { useState } from "react";

const Categories = () => {
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  const [filter, setFilter] = useState(0);

  return (
    <div className="content__top">
      <div className="categories">
        <ul>
          {categories.map((item, index) => (<li
            key={index}
            className={filter === index ? "active" : ""}
            onClick={() => setFilter(index)}
          >
            {item}
          </li>))}
          
        </ul>
      </div>
    </div>
  );
};

export default Categories;
