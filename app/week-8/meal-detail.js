"use client";
import { useState, useEffect } from "react";
export default function MealDetail({ meal }) {
  const [showDetail, setShowDetail] = useState(false);
  const [mealDetail, setMealDetail] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);




  const handleClick = async () => {

    setShowDetail((prev) => !prev);

    if(!showDetail)
    {
        await fetchMealDetails();
    }
    else
    {
        setIngredients([]);
        setMeasures([]);
    }
  };
  async function fetchMealDetails() {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
      );

      const data = await response.json();
      setMealDetail(data.meals || null);
    } catch (error) {
      console.log(`Error: ${error.message}`);
      setMealDetail([]);
    }
  }

  useEffect(() => {
    const data = mealDetail[0] ?? {};
    const tempIngredients = [];
    const tempMeasures = [];
    for (const key in data) {
      if (
        key.startsWith("strIngredient") &&
        data[key] &&
        data[key].trim() !== ""
      ) {
        tempIngredients.push(data[key]);
      }
      if (key.startsWith("strMeasure") &&  data[key] &&
        data[key].trim() !== "") {
        tempMeasures.push(data[key]);
      }
    }

    setIngredients(tempIngredients);
    setMeasures(tempMeasures);
  }, [mealDetail]);

  return (
    <div
      onClick={handleClick}
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        padding: "10px",
        border: "2px solid #155dfc",
        borderRadius: "8px",
        marginBottom: "10px",
        transition: "background 0.2s",
      }}
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        style={{
          width: "80px",
          height: "80px",
          objectFit: "cover",
          borderRadius: "8px",
          marginRight: "15px",
          transition: "transform 0.2s",
        }}
      />
      <div>
        <h3 style={{ margin: 0, fontWeight:"bold", fontSize: "1.25rem" }}>{meal.strMeal}</h3>
        {showDetail && mealDetail && (
          <div style={{ marginTop: "8px", fontSize: "1.05rem", color: "#55738a" }}>
            <p>
              <strong>Ingredients:</strong>
            </p>
            <ul style={{ paddingLeft: "20px", marginTop: "5px" }}>
              {ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient}{measures[index]? ":": ""}<span style={{fontWeight:"bold"}}>{measures[index]??""}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
