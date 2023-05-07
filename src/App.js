

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

function App() {
  return (
    <div className="App">
<Router>
    <Routes>
        <Route exact path="/" element={<SelectRoom />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/room" element={<Room />} />
    </Routes>
</Router>
    </div>
  );
}

export default App;
