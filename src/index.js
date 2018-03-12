import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostIndex from './components/post_index';
import PostNew from './components/post_new';
import PostShow from './components/post_show'


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/post/new" component={PostNew} />
        <Route path="/post/:id" component={PostShow} />
        <Route path="/" component={PostIndex} />

      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
