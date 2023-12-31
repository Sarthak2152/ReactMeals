import Modal from "./UI/Modal";
import CartItem from "./CartItem";
import { useContext } from "react";
import { UserProgressContext } from "../store/UserProgressProvider";
import Button from "./UI/Button";
import { CartContext } from "../store/CartProvider";
const CartModal = (props) => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  function handleCartClose() {
    userProgressCtx.hideCart();
  }
  console.log(cartCtx.items);
  const totalPrice = cartCtx.items.reduce((totalPrice, item) => {
    return +item.price * item.quantity + totalPrice;
  }, 0);
  return (
    <Modal
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCartClose : null}>
      <div>
        <h1 className="text-2xl text-slate-900 font-bold">Your Cart</h1>
        <ul>
          {cartCtx.items.map((item) => {
            return (
              <CartItem
                key={item.id}
                addMeal={cartCtx.addItem}
                removeMeal={cartCtx.removeItem}
                item={item}
              />
            );
          })}
        </ul>
      </div>
      <div className="flex mt-5 flex-col justify-center items-end space-y-2">
        <p className="text-lg font-bold text-stone-700">${totalPrice}</p>
        <div className="space-x-3">
          <Button
            textOnly
            className="text-[#1d1a16] font-normal"
            onClick={handleCartClose}>
            Close
          </Button>
          {totalPrice > 0 && (
            <Button
              onClick={() => {
                userProgressCtx.showCheckOut();
              }}>
              Checkout
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
