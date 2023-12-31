import Container from "./UI/Container";
import logo from "../assets/logo.jpg";
import { useContext, useRef } from "react";
import Button from "./UI/Button";
import { CartContext } from "../store/CartProvider";
import CartModal from "./CartModal";
import { UserProgressContext } from "../store/UserProgressProvider";
import CheckoutModal from "./CheckoutModal";

function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  function handleCartClick() {
    userProgressCtx.showCart();
  }
  const total = cartCtx.items.reduce((totalItems, item) => {
    return totalItems + item.quantity;
  }, 0);
  return (
    <Container>
      <header className="flex justify-between items-center">
        <div className="flex items-center justify-center space-x-3">
          <img
            src={logo}
            className="w-[70px] rounded-full border-2 border-[#ffc404] "
            alt="logo"
          />
          <h1 className="text-3xl tracking-wider uppercase text-[#ffc404] font-semibold">
            Reactfood
          </h1>
        </div>
        <Button textOnly className="text-3xl" onClick={handleCartClick}>
          Cart ({total})
        </Button>
      </header>
      <CartModal />
      <CheckoutModal />
    </Container>
  );
}

export default Header;
