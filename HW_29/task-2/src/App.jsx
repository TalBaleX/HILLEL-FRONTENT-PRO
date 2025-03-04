import TodoList from "./components/TodoList/TodoList.jsx";
import TodoForm from "./components/TodoForm/TodoForm.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <>
      <TodoForm />
      <TodoList />
      <Footer />
    </>
  );
}
