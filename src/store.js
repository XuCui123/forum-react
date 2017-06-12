import { matchPath } from 'react-router';
import yax, { composeReducers, mapReducers, applyMiddleware } from 'yax';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import auth from './models/auth';
import topic from './models/topic';
import reply from './models/reply';
import user from './models/user';

export default (history) => {
  const router = createStore => (reducer, preloadedState) => {
    const appReducer = composeReducers(
      reducer,
      mapReducers({
        router: routerReducer
      })
    );
    const middleware = routerMiddleware(history);
    return createStore(
      appReducer,
      preloadedState,
      applyMiddleware(middleware)
    );
  };
  const store = yax({
    state: {},
    modules: { auth, topic, reply, user }
  }, router);
  const handlers = {};
  const on = (type, fn) => {
    handlers[type] = fn;
  };
  history.listen((location, action) => {
    const keys = Object.keys(handlers);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const match = matchPath(location.pathname, {
        path: key,
        isExact: true,
        strict: true
      });
      if (match) {
        return handlers[key]({
          match,
          action,
          location,
          dispatch: store.dispatch
        });
      }
    }
  });
  return { ...store, on };
};
