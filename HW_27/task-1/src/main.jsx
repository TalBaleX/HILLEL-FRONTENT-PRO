import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "/src/components/Header/Header.jsx";
import Footer from "/src/components/Footer/Footer.jsx";
import "/src/styles/main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="app-container">
      <Header />
      <main className="content">
        <div className="container py-5">
          <h1>Welcome to My Website</h1>
          <p>Some content here...</p>
        </div>
      </main>
      <Footer />
    </div>
  </StrictMode>
);
