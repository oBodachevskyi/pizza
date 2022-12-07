import { ReactComponent as PlusSvg } from '../assets/img/plus.svg';
import { useDispatch } from 'react-redux';
import { deletePizzaFromCart, addPizzaToCart, deacresePizzaFromCart } from '../redux/slises/cartSlice'

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  console.log(item)


  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img
          className="pizza-block__image"
          src={item.imageUrl}
          alt="Pizza"
        />
      </div>
      <div className="cart__item-info">
              <h3>{ item.title }</h3>
        <p>тонкое тесто,  { item.sizes }см.</p>
      </div>
      <div className="cart__item-count">
        <div onClick={() => { dispatch(deacresePizzaFromCart(item)) } } className="button button--outline button--circle cart__item-count-minus">
          < PlusSvg />
        </div>
        <b>{item.value }</b>
        <div onClick={() => {dispatch(addPizzaToCart(item))} } className="button button--outline button--circle cart__item-count-plus">
            < PlusSvg />
        </div>
      </div>
      <div className="cart__item-price">
        <b>{item.price * item.value} $</b>
      </div>
      <div className="cart__item-remove">
        <div onClick={() => {
          dispatch(deletePizzaFromCart(item.key))
        }}
          className="button button--outline button--circle">
            < PlusSvg />
        </div>
      </div>
    </div>
  );
};
