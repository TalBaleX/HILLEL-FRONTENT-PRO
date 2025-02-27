import Form from "./components/Form/Form.jsx";
import Code from "./components/Code/Code.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./public/Main.css";
import "bootstrap";

class App extends React.Component {
  render() {
    return (
      <div id="container">
        <Form />
        <Code />
        <Footer />
      </div>
    );
  }
}
export default App;
