import React, { useState, useContext } from "react";
import { YipCSSStyles } from "./styled-components/Styled";
import CSSContext from "./context/CSS-context";
import toggle_view from "./context/view_context";
import APP_INTRO from './components/intro-screen/App_Intro'

function App() {
  const stylesContext = useContext(CSSContext)
  const [CSSStylesContext, setCSSStylesContext] = useState(stylesContext)
  const CSSState = { properties: CSSStylesContext, setProperties: setCSSStylesContext }

  const toggle_context = useContext(toggle_view)
  const [toggle_state, set_toggle_state] = useState(toggle_context)
  const current_toggle = { view: toggle_state, set_view: set_toggle_state }

  return (
    <CSSContext.Provider value={CSSState}>
      <toggle_view.Provider value={current_toggle}>
        <YipCSSStyles styles={CSSState}>
          <APP_INTRO />
        </YipCSSStyles >
      </toggle_view.Provider>
    </CSSContext.Provider>
  );
}

export default App;
