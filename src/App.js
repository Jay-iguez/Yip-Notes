import React, { useState, useContext } from "react";
import { YipCSSStyles } from "./styled-components/Styled";
import CSSContext from "./context/CSS-context";
import APP_INTRO from './components/intro-screen/App_Intro'

function App() {
  const stylesContext = useContext(CSSContext)
  const [CSSStylesContext, setCSSStylesContext] = useState(stylesContext)
  const CSSState = { properties: CSSStylesContext, setProperties: setCSSStylesContext }

  return (
    <CSSContext.Provider value={CSSState}>
      <YipCSSStyles styles={CSSState}>
        <APP_INTRO />
      </YipCSSStyles >
    </CSSContext.Provider>
  );
}

export default App;
