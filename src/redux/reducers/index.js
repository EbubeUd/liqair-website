import {combineReducers} from 'redux';
import masterAuthReducer from './masterAuthReducer';
import masterAlertReducer from './masterAlertReducer';
import masterAppStatusReducer from './masterAppStatusReducer';
import contentCarouselReducer from './contentCarouselReducer'
export default combineReducers({
    master:combineReducers({auth:masterAuthReducer,alert:masterAlertReducer,appStatus:masterAppStatusReducer}),
    content:combineReducers({carousel:contentCarouselReducer})
});
