// src/router/RouterConfig.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "/src/pages/MainPage/index.jsx";
import AboutMe from "/src/pages/AboutMe/index.jsx";
import Contacts from "/src/pages/Contacts/index.jsx";
import ErrorBoundary from "/src/components/ErrorBoundary/ErrorBoundary.jsx";
import { ThemeProvider } from "/src/context/ThemeContext.jsx";

export default function RouterConfig() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
