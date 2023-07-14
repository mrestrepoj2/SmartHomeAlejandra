import React, { useReducer } from "react";
import { SmartHomeContext } from "./SmartHomeContext";
import { smartDevicesReducer } from "./reducers/smartDevicesReducer";
import {SmartHome} from "./components/SmartHome";
import { Light } from "./components/Light";
import { MainControls } from "./components/MainControls";

export function App() {
  const [{ lights }, dispatch] = useReducer(smartDevicesReducer, {
    lights: [false, false, true],
  });

  return (
    <div>
      <SmartHomeContext.Provider value={{ lights, dispatch }}>
        <MainControls />
        <SmartHome />
      </SmartHomeContext.Provider>
    </div>
  );
}