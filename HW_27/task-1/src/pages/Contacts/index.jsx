import Header from "/src/components/Header/Header.jsx";
import Footer from "/src/components/Footer/Footer.jsx";

export default function Contacts() {
  return (
    <div className="app-container">
      <Header />
      <main className="content">
        <div className="containerTodos d-flex flex-column justify-content-center m-auto py-5 px-5">
          <h1>Contacts</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}
