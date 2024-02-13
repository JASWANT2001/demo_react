import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import ViewUser from "./ViewUser";
import ShowUser from "./ShowUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewUser></ViewUser>}></Route>
          <Route
            path="/create-user"
            element={<CreateUser></CreateUser>}
          ></Route>
          <Route path="/show-user/:id" element={<ShowUser></ShowUser>}></Route>
          <Route path="/edit-user/:id" element={<EditUser></EditUser>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
