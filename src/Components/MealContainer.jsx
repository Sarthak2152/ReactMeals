import MealCard from "./MealCard";
import Container from "./UI/Container";
import useFetch from "../hooks/useFetch";
import fetchMeals from "../utils/https";

function MealContainer() {
  const {
    fetchedData: meals,
    setFetchedData: setMeals,
    isLoading,
    error,
  } = useFetch(fetchMeals, []);

  if (isLoading) {
    return (
      <h1 className="text-center text-2xl text-slate-300 mt-8">
        Meals loading....
      </h1>
    );
  }
  if (error) {
    return (
      <h1 className="text-center text-2xl text-slate-300 mt-8">
        {error.message}
      </h1>
    );
  }
  return (
    <Container>
      <div className="grid gap-x-6 gap-y-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mb-14">
        {meals.map((meal) => {
          return <MealCard meal={meal} key={meal.id} />;
        })}
      </div>
    </Container>
  );
}

export default MealContainer;
