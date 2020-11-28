import {combineReducers} from 'redux';
import tokoReducer from './tokoReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    product: tokoReducer,
    user: userReducer,
});

export default rootReducer;