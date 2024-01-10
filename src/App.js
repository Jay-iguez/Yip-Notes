import React, { useState, useEffect } from "react";
import APP_INTRO from './components/intro-screen/App_Intro'
import CONTEXT_STORE from './utils/Context_Store'

function App() {

  return (
    <CONTEXT_STORE>
      <APP_INTRO />
    </CONTEXT_STORE>
  );
}

export default App;
