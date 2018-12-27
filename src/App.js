import React from "react";
import { Provider } from "mobx-react";
import store from "./store/store";
import AppContainer from "./screen/Router";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
