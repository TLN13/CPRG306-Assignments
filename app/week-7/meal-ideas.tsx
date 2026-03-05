"use client"
import { useState, useEffect } from "react";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface MealIdeasProps {
    ingredient: string;
}

const fetchMealIdeas = async (ingredient: string): Promise<Meal[]> => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
};
const MealIdeas: React.FC<MealIdeasProps> = ({ ingredient }) => {
    const [meals, setMeals] = useState<Meal[]>([]);
    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    };
    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);
    return (
    <div>
      <h2>Meal Ideas with {ingredient}</h2>
      {meals.length > 0 ? (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>
              <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: 50, height: 50 }} />
              <span>{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No meals found for {ingredient}.</p>
      )}
    </div>
  );
};

export default MealIdeas;