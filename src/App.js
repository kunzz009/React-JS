import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from "./Components/Login";
import Dashboard from "./Pages/Dashboard";
import Questions from "./Components/Questions";
import AdminPages from "./Pages/Admin";

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
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
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

  return (
    <div className="App">
      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        // <Feedback/>
      } */}

      <Routes>
        {/* <Route path="/login" element={currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPages />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/question" element={<Questions />} />
      </Routes>
    </div>
  );
}
const logger = (log) => {
  console.log(log);
}
logger('Message....................')

export default App;
