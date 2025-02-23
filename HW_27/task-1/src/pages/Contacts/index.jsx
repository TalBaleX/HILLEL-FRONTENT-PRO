import Header from "/src/components/Header/Header.jsx";
import Footer from "/src/components/Footer/Footer.jsx";
import "./Contacts.css";

export default function Contacts() {
  return (
    <>
      <Header />
      <main className="content">
        <div className="containerTodos d-flex flex-column justify-content-center m-auto py-5 px-5">
          <h1>Contacts</h1>
          <p>
            If you would like to get in touch with TalBaleX, you can reach out
            via the following methods:
          </p>
          <ul>
            <li>Email: talbalex@example.com</li>
            <li>Phone: +123 456 7890</li>
            <li>LinkedIn: linkedin.com/in/talbalex</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
