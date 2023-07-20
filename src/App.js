// import logo from './logo.svg';
import React from "react";
import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Car from './class';

import New from './new';
import Car from './car';
import Event from './event';
import Goal from './goal';
import List from './list';
import Clock from './clock';
import Reactform from './form';
import './index.css';
import Newstate from './useState_updateobject';
import Timer from './useEffect_sample';
import HookCounterOne from './uesEffect-little_update';
  // import Component1 from './usecontext1';
 import Component11 from './usecontext_solu';
  import Countryapi from './state'

import Use from './useEffect challenge';
// import PropChangeWatch  from './useEffect1';
import Shop from './addToCard';
function App() {
  return (
    <>

    <Car color="blue" />
   <Event />
   <Goal isGoal={true} />
   <List />
   <Clock />
   <Newstate />
   <Timer />
   <HookCounterOne />
   <Reactform />
   <Use />
   <Countryapi />
   {/* <Component1 /> */}
   <Component11 />
   <Shop />
   
    <New />
    <h1>Hello React-JS</h1>


    </>

  );
}

export default App;
