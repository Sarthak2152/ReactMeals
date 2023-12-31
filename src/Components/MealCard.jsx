import Button from "./UI/Button";
import { CartContext } from "../store/CartProvider";
import { useContext } from "react";
function MealCard({ meal }) {
  const cartCtx = useContext(CartContext);
  function handleAddMealToCart() {
    cartCtx.addItem(meal);
    console.log(cartCtx);
  }
  return (
    <div className="bg-[#1d1a16] flex flex-col justify-between rounded-lg overflow-hidden text-[#d9e2f1]">
      {/* IMAGE */}
      <img
        className="h-[20rem] w-full object-cover"
        src={`http://localhost:5000/${meal.image}`}
        alt="meal image"
      />
      {/* TEXT  */}
      <div className="px-5 py-4 text-center flex flex-col justify-between items-center space-y-8">
        <div>
          <h1 className="text-2xl font-bold">{meal.name}</h1>
          <p className="mt-4">
            <span className="text-[#ffc404] font-bold px-6 py-1 rounded-md bg-[#312c1d]">
              ${meal.price}
            </span>
          </p>
          <p className="mt-4 leading-5">{meal.description}</p>
        </div>
        <Button onClick={handleAddMealToCart}>Add to cart</Button>
      </div>
    </div>
  );
}

export default MealCard;
