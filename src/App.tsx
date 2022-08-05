import { Routes, Route } from "react-router-dom";
import { SearchUsers } from "./Components/SearchUsers/SearchUsers";
import { User } from "./Components/User/User";
import "./App.css";
function App() {
  return (
    <div className="App">
      <h2 className="title">GitHub Search</h2>
      <Routes>
        <Route path="" element={<SearchUsers />}></Route>
        <Route path=":id_GitHub" element={<User />}></Route>
      </Routes>
    </div>
  );
}

export default App;
