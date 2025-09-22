import React, { useState } from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ContentSection from "./Components/ContentSection";
import Footer from "./Components/Footer";
import TipSection from "./Components/TipSection";

// img
import pizzaImg from "./assets/pizza1.jpg";
import sushiImg from "./assets/sushi1.jpg";
import burgerImg from "./assets/burger2.jpg";

const App = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Pixelated Pizza",
      description: "A cheesy, pixel-perfect classic. Easy to make!",
      image: pizzaImg,
    },
    {
      id: 2,
      title: "Sushi Sprites",
      description: "Fresh and fun, these little rolls are bite-sized perfection.",
      image: sushiImg,
    },
    {
      id: 3,
      title: "Burger Bits",
      description: "Build your own burger with our quick and easy guide.",
      image: burgerImg,
    },
  ]);

  // random recipe API
  const fetchRandomRecipe = async () => {
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await res.json();
      const meal = data.meals[0];

      const newRecipe = {
        id: meal.idMeal,
        title: meal.strMeal,
        description: meal.strInstructions.substring(0, 100) + "...",
        image: meal.strMealThumb,
      };

      
      setRecipes((prev) => [newRecipe, ...prev]);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1b2a4e] via-[#0f1a30] to-[#0913eb] text-white flex flex-col">
      <Navbar />

      
      <Hero fetchRandomRecipe={fetchRandomRecipe} />

      
      <ContentSection recipes={recipes} />

      
      <TipSection />

      <Footer />
    </div>
  );
};

export default App;
