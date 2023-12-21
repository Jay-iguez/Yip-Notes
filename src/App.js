import React from "react";
import APP_INTRO from './components/intro-screen/App_Intro'
import CONTEXT_STORE from './utils/Context_Store'


function App() {

  

  /**
   * const stylesContext = useContext(CSSContext)
  const [CSSStylesContext, setCSSStylesContext] = useState(stylesContext)
  const CSSState = { properties: CSSStylesContext, setProperties: setCSSStylesContext }

  const toggle_context = useContext(toggle_view)
  const [toggle_state, set_toggle_state] = useState(toggle_context)
  const current_toggle = { view: toggle_state, set_view: set_toggle_state }

  const condition_context = useContext(condition_view)
  const [condition_state, set_condition_state] = useState(condition_context)
  const current_condition = { condition: condition_state, set_condition: set_condition_state, kennel: [] }

  const routes_context = useContext(routes)
  const [kennel_routes, set_kennel_routes] = useState(routes_context)
  const routes_state = { kennel_routes: kennel_routes, set_kennel_routes: set_kennel_routes }

  const app_context = useContext(app_data)
  const [app, set_app] = useState(app_context)
  const app_state = { app: app, set_app: set_app }
   *    <DUMMYTEST />
   */
  

  return (
    <CONTEXT_STORE>
     <APP_INTRO /> 
    </CONTEXT_STORE>
  );
}

export default App;
