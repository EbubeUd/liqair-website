import { ROLE_INDEX, ROLE_STORE, ROLE_SHOW, ROLE_UPDATE, ROLE_DELETE,
    ROLE_TEST, ROLE_ASSIGN, ROLE_RETRACT} from './types';
import Axios from '../../rclient/masterClient';
import handler from '../../exceptions/handler';


export const roleIndexAction = () => {
    
    return (dispatch) => {
        Axios.get(`role/index`)
        .then(data => {
            dispatch({type: ROLE_INDEX,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const roleStoreAction = (payLoad) => {

    return (dispatch) => {
        Axios.post(`role/store`,payLoad)
        .then(data => {
            dispatch({type: ROLE_STORE,payLoad: data});
            dispatch(roleIndexAction());
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const roleShowAction = (payLoad) => {
    
    return (dispatch) => {
        Axios.get(`role/show`,payLoad)
        .then(data => {
            dispatch({type: ROLE_SHOW,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const roleUpdateAction = (payLoad) => {

    return (dispatch) => {
        Axios.post(`role/update`,payLoad)
        .then(data => {
            dispatch({type: ROLE_UPDATE,payLoad: data});
            dispatch(roleIndexAction());
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const roleDeleteAction = (payLoad) => {

    return (dispatch) => {
        Axios.post(`role/delete`,payLoad)
        .then(data => {
            dispatch({type: ROLE_DELETE,payLoad: data});
            dispatch(roleIndexAction());
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const roleTestAction = () => {

    return (dispatch) => {
        Axios.get(`role/test`)
        .then(data => {
            dispatch({type: ROLE_TEST,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const roleAssignAction = (payLoad, callback) => {

    return (dispatch) => {
        Axios.post(`role/assign`,payLoad)
        .then(data => {
            dispatch({type: ROLE_ASSIGN,payLoad: data});
            callback();
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const roleRetractAction = (payLoad, callback) => {

    return (dispatch) => {
        Axios.post(`role/retract`,payLoad)
        .then(data => {
            dispatch({type: ROLE_RETRACT,payLoad: data});
            callback();
        })
        .catch((error) => {
            handler(error);
        });
    }
}