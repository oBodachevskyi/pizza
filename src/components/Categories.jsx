import { useSelector, useDispatch } from "react-redux";

import { setCategoryId } from "../redux/slises/filterSlice";


const Categories = () => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();

  return (
    <div className="content__top">
      <div className="categories">
        <ul>
          {categories.map((item, index) => (
            <li
              key={index}
              className={categoryId === index ? "active" : ""}
              onClick={() => dispatch(setCategoryId(index))}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
