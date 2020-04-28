import { createStore, compose, applyMiddleware } from "redux";
import rootsaga from "./../saga/index";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import myReducer from "./../reducer/index";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false
      })
    : compose;

const sagaMiddleware = createSagaMiddleware();

const configStore = () => {
  const middleware = [thunk, sagaMiddleware];
  const enhancer = [applyMiddleware(...middleware)];
  const store = createStore(myReducer, composeEnhancers(...enhancer));

  sagaMiddleware.run(rootsaga);
  return store;
};

export default configStore;
