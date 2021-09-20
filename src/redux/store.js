import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { categoriesReducer } from './reducers/categoriesReducer'
import { mealsReducer } from './reducers/mealsReducer'
import { modalListReducer } from "./reducers/modalListReducer";

const rootReducer = combineReducers({
    meals: mealsReducer,
    categories: categoriesReducer,
    modalList: modalListReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))