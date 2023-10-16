import React, { useState, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { TopNavigation } from "./styled-components/App-styled/AppStyled";
import CSSContext from "./context/CSS-context";
import YipHome from "./components/YipHome";

function App() {
  const stylesContext = useContext(CSSContext)
  const [CSSStylesContext, setCSSStylesContext] = useState(stylesContext)
  const CSSState = {properties : CSSStylesContext, setProperties : setCSSStylesContext}

  return (
    <CSSContext.Provider value={CSSState}>
      <TopNavigation>
        <Link to={`/settings`}>Settings</Link>
        <Link to={`/info`}>Information</Link>
      </TopNavigation>
      <Routes>
        <Route path={`/`} element={<YipHome />} />
      </Routes>
    </CSSContext.Provider>
  );
}

export default App;
