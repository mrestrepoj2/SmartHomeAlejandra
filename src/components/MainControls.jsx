import { useContext } from "react";
import { SmartHomeContext } from "../SmartHomeContext";
export function MainControls() {

  const {dispatch} = useContext (SmartHomeContext);
  return (
    <div>
      <button onClick={() => dispatch ({type: "alloff"})}> All Off</button>
      <button onClick={() => dispatch ({type: "allon"})}> All On</button>
    </div>
  );
}
