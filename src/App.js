import React, { useState } from "react";
import { Routes, Route, BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Login } from "./Components/Login";
import Main from "./Pages/Main";
import Questions from "./Components/Questions";
import AdminPages from "./Pages/Admin";
import Dashboard from "./Pages/Dashboard";
import Feedback from "./Components/Feedback";

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  // User Login info
  const database = [
    {
      username: "lamct",
      password: "123456",
      ID: "703b0336-44d8-40c4-9dc1-3c6e8d9b6d03"
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/admin",
      element: <Main />,
      children: [
        {
          path: "/admin/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/admin/manage",
          element: <AdminPages />,
        },
        {
          path: "/admin/question",
          element: <Questions />,
        },
        {
          path: "/admin/feedback",
          element: <Feedback />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        // <Feedback/>
      } */}

      <RouterProvider router={router} />
    </div>
  );
}
const logger = (log) => {
  console.log(log);
}
logger('Message....................')

export default App;
