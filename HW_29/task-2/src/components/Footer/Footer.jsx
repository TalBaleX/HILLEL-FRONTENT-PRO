import { useSelector } from "react-redux";
import "./Footer.css";

export default function Footer() {
  const taskCount = useSelector((state) => state.todos.length);

  return (
    <footer id="footer">
      <p>Total tasks: {taskCount}</p>
    </footer>
  );
}
