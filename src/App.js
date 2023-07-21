import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  console.log(recipes)
  

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  function addRecipe(newRecipe) {
    setRecipes([...recipes, newRecipe])
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList />
      <RecipeCreate addRecipe={addRecipe}/>
    </div>
  );
}

export default App;
