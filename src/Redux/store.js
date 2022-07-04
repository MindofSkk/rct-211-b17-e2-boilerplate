// NOTE: use this store variable to create a store.
import { legacy_createStore, applyMiddleware , compose, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as appReducer } from "./AppReducer/reducer";

const rootReducer=combineReducers({
    authReducer,
    appReducer,
})

const composeEnhancers=  window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}