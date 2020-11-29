import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import DefaultTheme from './theme/DefaultTheme';

import store from './store';
import Issues from './issues';

import './styles/index.scss';

function App() {
  return (
    <Provider store={store}>
      <DefaultTheme>
        <Router>
          <Switch>
            <Route path="/issues">
              <Issues />
            </Route>
          </Switch>
        </Router>
      </DefaultTheme>
    </Provider>
  );
}

export default App;
