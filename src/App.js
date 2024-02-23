import React from "react";
import APP_INTRO from './components/intro-screen/App_Intro'
import CONTEXT_STORE from './utils/Context_Store'

function App() {
  
  // Basic vanilla startup React App that just wraps our App_Intro component in our Context_Store

  return (
    <CONTEXT_STORE>
        <APP_INTRO />
    </CONTEXT_STORE>
  );
}

export default App;
