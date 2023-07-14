import React from "react";
import { Light } from "./Light";
import { SmartHomeContext } from "../SmartHomeContext";

export function SmartHome() {
  const { lights } = React.useContext(SmartHomeContext);
  console.log(lights);

  return (
    <section
    style={{
      fontSize: "5rem",
      display: "grid",
      gridTemplateColumns: "min-content min-content",
      gap: "3px",
      alignItems: "center",
      paddingTop: "1rem",
    }}>
      
      {lights.map((isOn, index) => (
        <Light key={index} id={index} />
      ))}
    </section>
  );
}
