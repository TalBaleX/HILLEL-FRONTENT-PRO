import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import Home from "./pages/Home/Home";
import ToDo from "./pages/ToDo/ToDo";
import SWAPI from "./pages/SWAPI/SWAPI";

export default function App({ darkMode, setDarkMode }) {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<PageLayout darkMode={darkMode} setDarkMode={setDarkMode} />}
        >
          <Route index element={<Home />} />
          <Route path="todo" element={<ToDo />} />
          <Route path="swapi" element={<SWAPI />} />
        </Route>
      </Routes>
    </Router>
  );
}
