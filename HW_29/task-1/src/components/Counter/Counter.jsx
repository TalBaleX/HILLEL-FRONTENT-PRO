import "./Counter.css";
import { useSelector, useDispatch } from "react-redux";
import { incNum, decNum } from "../../store/actions.jsx"; // Import actions

export default function Counter() {
  const mystate = useSelector((state) => state.change);
  const dispatch = useDispatch();
  return (
    <>
      <div id="counter">
        <div className="innerBoxes">
          <span>Value: {mystate}</span>
        </div>
        <div className="innerBoxes">
          <button onClick={() => dispatch(incNum())}>+</button>
          <button onClick={() => dispatch(decNum())}>-</button>
        </div>
      </div>
    </>
  );
}
