import React from 'react';
import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import RecipeList from './views/RecipeList/RecipeList';
import RecipeDetails from './views/RecipeDetails/RecipeDetails';
import { Provider } from 'react-redux';
import store from './store/storeConfig';
import UpdateIngridients from './views/UpdateIngridients/UpdateIngridients';

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="app-container">
          <Switch>
            <Route exact path={"/"} component={RecipeList} />
            <Route exact path={"/:recipeId"} component={RecipeDetails} />
            <Route exact path={"/:recipeId/update-ingridents"} component={UpdateIngridients} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
