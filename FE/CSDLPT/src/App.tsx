import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/home-page/Home";
import BaseLayout from "./BaseLayout/BaseLayout";
function App() {
  return (
    <Routes>
      <Route path="" element={<BaseLayout />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
