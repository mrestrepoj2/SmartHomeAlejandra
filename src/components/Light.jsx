
import React, { useContext } from 'react';
import { SmartHomeContext } from '../SmartHomeContext';
 export function Light({id}) {
  const { lights, dispatch } = useContext(SmartHomeContext);
  const isOn = lights[id];

  const handleOnToggle = () => {
  dispatch ({ type:"toggle", payload: id });
  };

  return (
    <button
    data-testid={`light-${id}`}
    id={id}
    onClick={handleOnToggle}
    style={{
      border: "solid 1px gray",
      padding: "2rem",
      fontSize: "3rem",
      background: isOn ? "#eee" : "#444",
    }}
  >
    {isOn ? "💡" : "⚫️"}
  </button>
  );
}