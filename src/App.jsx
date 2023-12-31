import Header from "./Components/Header";
import MealContainer from "./Components/MealContainer";
import { CartProvider } from "../src/store/CartProvider";
import { UserProgressProvider } from "./store/UserProgressProvider";
function App() {
  return (
    <UserProgressProvider>
      <CartProvider>
        <Header />
        <MealContainer />
      </CartProvider>
    </UserProgressProvider>
  );
}

export default App;
