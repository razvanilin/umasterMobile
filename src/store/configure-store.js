import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
    const enhancer = compose(
      applyMiddleware(thunkMiddleware),
      global.reduxNativeDevTools ? global.reduxNativeDevTools(/*options*/) : nope => nope,
    );
    const store = createStore(rootReducer, initialState, enhancer);
    if (global.reduxNativeDevTools) {
        global.reduxNativeDevTools.updateStore(store);
      }
    return store;
}
