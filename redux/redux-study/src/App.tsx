import * as React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './module';

const store = createStore(reducer); // only one store

// Redux 자체 구독은 store.subscribe() 메서드를 사용

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          a
        </div>
      </Provider>
    );
  }
}

export default App;
