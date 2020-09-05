import React, { useState } from "react";
import "./App.css";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

function App() {
  const [userState, setUserState] = useState({
    username: "supermax",
  });

  const usernameChangedHandler = (event) => {
    setUserState({
      username: event.target.value,
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <UserInput
        changed={usernameChangedHandler}
        currentName={userState.username}
      />
      <UserOutput userName={userState.username} />
      <UserOutput userName={userState.username} />
      <UserOutput userName="Max" />
    </div>
  );
}

export default App;
