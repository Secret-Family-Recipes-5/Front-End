import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import formValidation from "./formValidation";
import * as Yup from "yup";
import { axiosWithAuth } from "../axiosWithAuth/axiosWithAuth";
import { useHistory } from "react-router-dom";
import RootContext from "../contexts/RootContext";
import axios from "axios";

const Login = () => {
  useEffect(() => {
    localStorage.removeItem("token");
  }, []);
  let history = useHistory();
  const { setLoginStatus } = useContext(RootContext);

  const initialFormValues = {
    username: "",
    password: "",
  };

  const initialFormErrors = {
    username: "",
    password: "",
  };

  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleInput = (event) => {
    const { name, value } = event.target;

    Yup.reach(formValidation, name)
      .validate(value)

      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })

      .catch((error) => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    await axiosWithAuth()
      .post(
        "/login",
        `grant_type=password&username=${formValues.username}&password=${formValues.password}`
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.access_token);
        console.log(
          localStorage.getItem("token")
            ? "token has been added"
            : "token not added"
        );
        setLoginStatus(true);
        history.push("/home");
      })
      .catch((err) => console.log(err));

    await axios
      .create({
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      })
      // ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
      // NOTE: To access any of these user endpoint, you will need token authentication, which can be passed after a user login is performed.
      // token is assigned as you can see in console.log
      // axios and axiosWithAuth() both dont provide proper authentication even if token is already assigned so no idea why it isnt working ¯\_(ツ)_/¯
      // passing `grant_type=password&username=${formValues.username}&password=${formValues.password}`
      // or passing token as the second parameter in get doesnt solve it either ¯\_(ツ)_/¯
      // passing token as the auth header doesnt work ¯\_(ツ)_/¯
      // ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
      .get("https://secret-recipe-5.herokuapp.com/users/currentuser")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h2 className="formTitle">&mdash; Login</h2>
        <p className="formDesc">
          The perfect solution to your lost family cookbook
        </p>

        <hr />

        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            placeholder="johndoe"
            id="username"
            value={formValues.username}
            onChange={handleInput}
          />
          <div className="formErrors">
            <p>{formErrors.username}</p>
          </div>

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="**********"
            id="password"
            value={formValues.password}
            onChange={handleInput}
          />
          <div className="formErrors">
            <p>{formErrors.password}</p>
          </div>

          <button>Login</button>

          <p className="authLink">
            Don't have an account &mdash; <Link to="/register">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
