import * as Yup from "yup";

const recipeFormValidation = Yup.object().shape({
  title: Yup.string().required("⚠️ Give your recipe a name"),
  source: Yup.string().required(
    "⚠️ Lets be honest. You didn't invent this recipe"
  ),
  ingredients: Yup.string().required(
    "⚠️ A recipe without any ingredients? I don't think so"
  ),
  instructions: Yup.string()
    .min(10, "⚠️ You have got to give me more than 10 letters")
    .required("⚠️ A recipe without any ingredients? I don't think so"),
  category: Yup.string().required("⚠️ Category is required"),
});

export default recipeFormValidation;
