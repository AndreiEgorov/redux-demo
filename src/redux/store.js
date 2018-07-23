import {createStore} from 'redux';

import rootReducer from './reducers'; //this is export default combineReducer

export default createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) //create store has to have an argument 