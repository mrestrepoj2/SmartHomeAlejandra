import React, { useContext } from 'react';
import { SmartHomeContext } from '../SmartHomeContext';
import Light from './Light';

export function SmartHome() {
  const { lights } = React.useContext(SmartHomeContext);
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
    <Light key={index} id={index}></Light>
    ))}
    </section>
    )
  };
  
