import React from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App;