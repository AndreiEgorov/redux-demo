import {combineReducers} from 'redux'; //takes a lot of redusers and combines them into one
import  CounterReducer from './modules/counter';

import NameReducer from './modules/name'

export default combineReducers({
    counter: CounterReducer,
    name: NameReducer
    //userForm: formReducer, we would put this  if we had a formReducer
})