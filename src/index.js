import 'antd/dist/antd.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createStore from './store';
import Home from './pages/Home';
import AddTopic from './pages/AddTopic';
import Topic from './pages/Topic';
import User from './pages/User';
import Login from './pages/Login';
import Register from './pages/Register';

const history = createHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/topic/create" component={AddTopic}/>
        <Route path="/topic/:id" component={Topic}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/user/:id" component={User}/>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
