"use client";

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
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
};

const MealIdeas: React.FC<MealIdeasProps> = ({ ingredient }) => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!ingredient) {
      setMeals([]);
      return;
    }

    setLoading(true);
    setError(null);

    let isCurrentRequest = true;

    // Fetch meals
    fetchMealIdeas(ingredient)
      .then((meals) => {
 
        if (isCurrentRequest) {
          setMeals(meals);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isCurrentRequest) {
          setError("Failed to load meal ideas");
          setLoading(false);
        }
      });


    return () => {
      isCurrentRequest = false;
    };
  }, [ingredient]);


  if (!ingredient) {
    return (
      <div className="p-6 rounded shadow-md bg-[#E9E4E0] text-[#172A39]">
        <h2 className="text-xl font-semibold mb-4">Meal Ideas</h2>
        <p>Select an item to see meal ideas</p>
      </div>
    );
  }

  return (
    <div className="p-6 rounded shadow-md bg-[#E9E4E0] text-[#172A39]">
      <h2 className="text-xl font-semibold mb-4">
        Meal Ideas with {ingredient}
      </h2>

      {loading && (
        <p className="text-[#6E7575]">Loading meal ideas...</p>
      )}

      {error && (
        <p className="text-red-500">{error}</p>
      )}

      {!loading && !error && meals.length > 0 && (
        <ul className="space-y-3">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="flex items-center gap-3 p-3 rounded shadow-sm bg-[#E9E4E0] hover:shadow-md transition-shadow border border-[#172A39]"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-12 h-12 object-cover rounded"
              />
              <span className="font-medium">{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      )}

      {!loading && !error && meals.length === 0 && (
        <p>No meal ideas found for {ingredient}.</p>
      )}
    </div>
  );
};

export default MealIdeas;