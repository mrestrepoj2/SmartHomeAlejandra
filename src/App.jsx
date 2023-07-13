// import React, { useReducer } from 'react';
// import { MainControls } from './components/MainControls';
// import { SmartHome } from './components/SmartHome';
// import { SmartHomeContext } from './SmartHomeContext';
// import { smartDevicesReducer } from './reducers/smartDevicesReducer';

// export function App() {
//   const initialState = {
//     lights: [false, false, true],
//   };

//   const [state, dispatch] = useReducer(smartDevicesReducer, initialState);

//   return (
//     <SmartHomeContext.Provider value={{ lights: state.lights, dispatch }}>
//       <div>
//         <MainControls />
//         <SmartHome />
//       </div>
//     </SmartHomeContext.Provider>
//   );
// }
import React, { useReducer } from 'react';
import { MainControls } from './components/MainControls';
import { SmartHome } from './components/SmartHome';
import { SmartHomeContext } from './SmartHomeContext';
import { smartDevicesReducer } from './reducers/smartDevicesReducer';

export function App() {
 
const [{ lights }, dispatch] =
useReducer(smartDevicesReducer, { lights: [false, false, true]});
  return (
  <div>
    <SmartHomeContext.Provider value={{ lights, dispatch }}>
  
        <MainControls />
        <SmartHome />
    </SmartHomeContext.Provider>
    </div>
  );
}
