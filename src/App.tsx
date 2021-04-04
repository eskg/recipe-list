import React from 'react';
import './App.css';
import { Route, Router, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import RecipeList from './views/RecipeList/RecipeList';
import RecipeDetails from './views/RecipeDetails/RecipeDetails';
import { Provider } from 'react-redux';
import store from './store/storeConfig';

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path={"/"} component={RecipeList} />
          <Route exact path={"/:recipeId"} component={RecipeDetails} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
