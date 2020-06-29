import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import RootContext from "../contexts/RootContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Recipe = () => {
  let history = useHistory();
  const params = useParams();
  const { recipes, setItemToEdit } = useContext(RootContext);
  const recipe = recipes.find((recipe) => recipe.recipeid == params.id);

  const deleteHandler = () => {
    axios
      .delete(
        `https://secret-recipe-5.herokuapp.com/recipes/recipe/${params.id}`
      )
      .then((res) => {
        history.push("/home");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const updateHandler = () => {
    setItemToEdit(recipe);
    history.push("/update");
  };

  if (recipe === undefined) {
    return (
      <div className="recipeNotFound">
        <h2 className="">
          Recipe not found. <Link to="/home">Back to Home</Link>
        </h2>
      </div>
    );
  } else {
    return (
      <div className="recipeContainer">
        <h2 className="recipeTitle">{recipe.title}</h2>
        <p className="recipeSource">&mdash; {recipe.source}</p>
        <hr />
        <p className="recipeIngredients">{recipe.ingredients}</p>
        <p className="recipeInstructions">{recipe.instructions}</p>

        <div className="recipeActions">
          <button onClick={deleteHandler} className="deleteBtn">
            Delete
          </button>
          <button onClick={updateHandler} className="updateBtn">
            Update
          </button>
        </div>
      </div>
    );
  }
};

export default Recipe;
