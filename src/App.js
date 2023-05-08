import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import SelectRoom from "./pages/SelectRoom/SelectRoom";
import Login from "./pages/JoinRoom/Login";
import Room from "./pages/Room/Room";
import Register from "./pages/CreateRoom/Register";

export const Context = React.createContext({});

function App() {
  const [userName, setUserName] = React.useState("");
  const [loginRoomId, setLoginRoomId] = React.useState("");

  return (
    <Context.Provider value={{userName, setUserName, loginRoomId, setLoginRoomId}}>
      <div className="App">
        <Router>
            <Routes>
                <Route exact path="/" element={<SelectRoom />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/room/:id" element={<Room />} />
            </Routes>
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
