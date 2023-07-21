import React from "react";

function RecipeView({recipeData, deleteRecipe}) {
    function handleDelete() {
        deleteRecipe(recipeData.index)
    }
    const {name, cuisine, photo, ingredients, preparation} = recipeData
    return (
        <tr>
            <td>
                {name}
            </td>
            <td>
                {cuisine}
            </td>
            <td>
            <img alt={photo} src={photo} />
            </td>
            <td>{ingredients}</td>
            <td>{preparation}</td>
            <td>
                <button name="delete" onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    )
}

export default RecipeView
