import * as React from 'react';
import './App.css';

import { BrowserRouter as Router, Route , Link} from 'react-router-dom';

import Exroute from './components/exroute/exroute'; // MyComponnent

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to="/hello" replace>hello</Link>
          </nav>
          <div>
            <Route path="/hello" component={Exroute} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
