import {combineReducers} from 'redux';
import masterAuthReducer from './masterAuthReducer';
import masterAlertReducer from './masterAlertReducer';
import masterAppStatusReducer from './masterAppStatusReducer';
import contentCarouselReducer from './contentCarouselReducer';
import contentClientReducer from './contentClientReducer';
import contentVideoReducer from './contentVideoReducer';
import contentMessageReducer from './contentMessageReducer';
import userReducer from './userReducer';
import roleReducer from './roleReducer';
export default combineReducers({
    master:combineReducers({
        auth:masterAuthReducer,
        alert:masterAlertReducer,
        appStatus:masterAppStatusReducer
    }),
    content:combineReducers({
        carousel:contentCarouselReducer,
        client:contentClientReducer,
        video:contentVideoReducer,
        message:contentMessageReducer,
    }),
    user:combineReducers({
        user:userReducer
    }),
    role:combineReducers({
        role:roleReducer
    })
});
