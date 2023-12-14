import React, { useState, useContext } from "react";
import { YipCSSStyles } from "./styled-components/Styled";
import CSSContext from "./context/CSS-context";
import toggle_view from "./context/view_context";
import condition_view from "./context/condition_context";
import APP_INTRO from './components/intro-screen/App_Intro'

function App() {
  const stylesContext = useContext(CSSContext)
  const [CSSStylesContext, setCSSStylesContext] = useState(stylesContext)
  const CSSState = { properties: CSSStylesContext, setProperties: setCSSStylesContext }

  const toggle_context = useContext(toggle_view)
  const [toggle_state, set_toggle_state] = useState(toggle_context)
  const current_toggle = { view: toggle_state, set_view: set_toggle_state }

  const condition_context = useContext(condition_view)
  const [condition_state, set_condition_state] = useState(condition_context)
  const current_condition = { condition: condition_state, set_condition: set_condition_state, kennel: []}

  return (
    <CSSContext.Provider value={CSSState}>
      <condition_view.Provider value={current_condition} >
        <toggle_view.Provider value={current_toggle}>
          <YipCSSStyles styles={CSSState}>
            <APP_INTRO />
          </YipCSSStyles >
        </toggle_view.Provider>
      </condition_view.Provider>
    </CSSContext.Provider>
  );
}

export default App;
