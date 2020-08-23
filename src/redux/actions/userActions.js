import { USER_INDEX, USER_STORE, USER_SHOW, USER_UPDATE, USER_DELETE,
    USER_TEST} from './types';
import Axios from '../../rclient/masterClient';
import handler from '../../exceptions/handler';


export const userIndexAction = () => {
    
    return (dispatch) => {
        Axios.get(`user/index`)
        .then(data => {
            dispatch({type: USER_INDEX,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const userStoreAction = (payLoad) => {

    return (dispatch) => {
        Axios.post(`user/store`,payLoad)
        .then(data => {
            dispatch({type: USER_STORE,payLoad: data});
            dispatch(userIndexAction());
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const userShowAction = (payLoad) => {
    
    return (dispatch) => {
        Axios.get(`user/show`,payLoad)
        .then(data => {
            dispatch({type: USER_SHOW,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const userUpdateAction = (payLoad) => {

    return (dispatch) => {
        Axios.post(`user/update`,payLoad)
        .then(data => {
            dispatch({type: USER_UPDATE,payLoad: data});
            dispatch(userIndexAction());
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const userDeleteAction = (payLoad) => {

    return (dispatch) => {
        Axios.post(`user/delete`,payLoad)
        .then(data => {
            dispatch({type: USER_DELETE,payLoad: data});
            dispatch(userIndexAction());
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const userTestAction = () => {

    return (dispatch) => {
        Axios.get(`user/test`)
        .then(data => {
            dispatch({type: USER_TEST,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}