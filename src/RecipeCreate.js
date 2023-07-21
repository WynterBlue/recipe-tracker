import React, { useState } from "react";

function RecipeCreate({addRecipe}) {
//////////////////////////////////////// bare necessities 
  const emptyRecipeState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [recipeState, setRecipeState] = useState(emptyRecipeState);

  function handleInput(event) {
    setRecipeState({
      ...recipeState,
      [event.target.name]: event.target.value
    })
  }
////////////////////////////////////////
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  function handleSubmit(event){
    event.preventDefault()
    addRecipe(recipeState)
    setRecipeState(emptyRecipeState)
  }
////////////////////////////////////////
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleInput}
              value={recipeState.name}
              />
            </td>
            <td>
            <input
              id="cuisine"
              name="cuisine"
              type="text"
              placeholder="Cuisine"
              onChange={handleInput}
              value={recipeState.cuisine}
              />
            </td>
            <td>
            <input 
            id="photo" 
            name="photo" 
            type="url" 
            placeholder="URL"
            onChange={handleInput}
            value={recipeState.photo}
            />
            </td>
            <td>
              <textarea
              id="ingredients" 
              name="ingredients" 
              placeholder="Ingredients"
              onChange={handleInput}
              value={recipeState.ingredients}
              rows={2} 
              />
            </td>
            <td>
              <textarea
              id="preparation" 
              name="preparation" 
              placeholder="Preparation"
              onChange={handleInput}
              value={recipeState.preparation}
              rows={2} 
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
