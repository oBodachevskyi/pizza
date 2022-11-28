import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortParam } from "../redux/slises/filterSlice";

export const Sort = () => {
  const sortMenu = ["популярности", "цене", "алфавиту"];
  const sortProp = ["rating", "price", "title"];

  const [open, setOpen] = useState(false);
  const [sortType, setSortType] = useState(false);
  const menuItem = useSelector((state) => state.filter.sort.name);
  const dispatch = useDispatch();

  const handleChangeMenuItem = (i) => {
    dispatch(setSortParam({ name: sortMenu[i], sortPropperty: sortProp[i] }));
    setOpen(!open);
  };

  const handleChangeSortType = () => {
    setSortType(!sortType);
    dispatch(setSortParam({ sortType: !sortType ? "asc" : "desc" }));
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          className={sortType ? "asc" : "desc"}
          onClick={handleChangeSortType}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{menuItem}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortMenu.map((item, index) => (
              <li
                key={item}
                className={menuItem === sortMenu[index] ? "active" : ""}
                onClick={() => handleChangeMenuItem(index)}
              >
                {sortMenu[index]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


