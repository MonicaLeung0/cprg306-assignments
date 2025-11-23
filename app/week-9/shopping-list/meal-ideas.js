"use client";
import { useState, useEffect } from "react";
import MealDetail from "./meal-detail";

export default function MealIdeas({ ingredient })
{
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        if (!ingredient) {
            setMeals([]); 
            return;
        };
        try{
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
            );
                
            const data = await response.json();
            console.dir(data);
            setMeals(data.meals || []); 
        }catch(error){
            console.log(`Error: ${error.message}`);
            setMeals([]);
        }
    }

//   async function loadMealIdeas() {
//     const mealResults = await fetchMealIdeas(ingredient);
//     setMeals(mealResults);
//   }
  useEffect(() => {
    fetchMealIdeas(ingredient);
  }, [ingredient]);

    return(
        <main style={{ padding: "1rem" }}>
            <h2>Meal Ideas for {ingredient || "..."}</h2>
            {meals.length === 0 ? (
                <p>No meal ideas found.</p>
            ) : (
                <ul>
                {meals.map((meal) => (
                    <MealDetail key={meal.idMeal} meal={meal} />
                ))}
                </ul>
            )}
        </main>
    );
}