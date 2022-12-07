import { ReactComponent as CartSvg } from "../assets/img/cart.svg";
import { ReactComponent as TrashSvg } from "../assets/img/trash.svg";
import { ReactComponent as ArrowSvg } from "../assets/img/grey-arrow-left.svg";
import { CartItem } from "../components/CartItem";
import { CartEmpty } from "../components/CartEmpty";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cleanCart } from "../redux/slises/cartSlice";

export const Cart = () => {
  const dispatch = useDispatch();
  const pizzasArray = useSelector((state) => state.cart);





  return (
    <>
      {pizzasArray.length === 0 ? (
        <CartEmpty />
      ) : (
        <div className="content">
          <div className="container container--cart">
            <div className="cart">
              <div className="cart__top">
                <h2 className="content__title">
                  <CartSvg />
                  Корзина
                </h2>
                <div
                  onClick={() => {
                    dispatch(cleanCart([]));
                  }}
                  className="cart__clear"
                >
                  <TrashSvg />
                  <span>Очистить корзину</span>
                </div>
              </div>
              <div className="content__items">
                {pizzasArray.length > 0 &&
                  pizzasArray.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
              </div>
              <div className="cart__bottom">
                <div className="cart__bottom-details">
                  <span>
                    {" "}
                    Всего пицц: <b>{pizzasArray.length} шт.</b>{" "}
                  </span>
                  <span>
                    {" "}
                    Сумма заказа: <b>900 ₽</b>{" "}
                  </span>
                </div>
                <div className="cart__bottom-buttons">
                  <NavLink
                    to="/"
                    className="button button--outline button--add go-back-btn"
                  >
                    <ArrowSvg />
                    <span>Вернуться назад</span>
                  </NavLink>
                  <div className="button pay-btn">
                    <span>Оплатить сейчас</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
