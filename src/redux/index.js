import { combineReducers, createStore } from 'redux'
import {SET_Name, SET_ID, WRITE_Message, SET_Messages} from './reducers'

const reducer = combineReducers({
    SET_Name,
    SET_ID, 
    WRITE_Message, 
    SET_Messages
})
const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;