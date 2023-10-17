import React, { useState, useContext } from "react";
import { YipHomeCSSContainer } from "./styled-components/Yip-home-styled-components/YipHomeStyled";
import CSSContext from "./context/CSS-context";
import YipIntro from "./components/Yip-home-page/YipStartIntro";

function App() {
  const stylesContext = useContext(CSSContext)
  const [CSSStylesContext, setCSSStylesContext] = useState(stylesContext)
  const CSSState = { properties: CSSStylesContext, setProperties: setCSSStylesContext }

  return (
    <CSSContext.Provider value={CSSState}>
      <YipHomeCSSContainer styles={CSSState}>
        <YipIntro />
      </YipHomeCSSContainer>
    </CSSContext.Provider>
  );
}

export default App;
