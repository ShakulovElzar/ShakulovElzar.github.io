import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import dialogsPageReducer from "./dialogsPageReducer";

let reducers = combineReducers({
    profilePageReducer,
    dialogsPageReducer
})

let store = createStore(reducers);

export default store;