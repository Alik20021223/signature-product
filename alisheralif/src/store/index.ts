import { createStore } from "redux";
import { rootReducer } from "./reducers/index";

// Cast window to any to access __REDUX_DEVTOOLS_EXTENSION__
const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(
  rootReducer,
  devToolsExtension && devToolsExtension(),
);

export default store;
