import Header from "/src/components/Header/Header.jsx";
import Footer from "/src/components/Footer/Footer.jsx";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <>
      <Header />
      <main className="content">
        <div className="containerTodos d-flex flex-column justify-content-center m-auto py-5 px-5">
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
