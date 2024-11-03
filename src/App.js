import { Provider } from "react-redux";
import Body from "./components/Body.js";
import Head from "./components/Head.js";
import store from "./utils/store.js";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
