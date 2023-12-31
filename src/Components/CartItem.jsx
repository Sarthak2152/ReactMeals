function CartItem({ addMeal, removeMeal, item }) {
  return (
    <li className="flex mt-2 justify-between">
      <h2>
        {item.name} - {item.quantity} x ${item.price}
      </h2>
      <div className="flex space-x-3">
        <button
          onClick={() => {
            removeMeal(item.id);
          }}
          className="flex w-[1.5rem] h-[1.5rem] font-bold bg-[#312c1d] text-[#ffc404] rounded-full justify-center items-center">
          -
        </button>
        <p>{item.quantity}</p>
        <button
          onClick={() => {
            addMeal(item);
          }}
          className="flex w-[1.5rem] h-[1.5rem] font-bold bg-[#312c1d] text-[#ffc404] rounded-full justify-center items-center">
          +
        </button>
      </div>
    </li>
  );
}

export default CartItem;
