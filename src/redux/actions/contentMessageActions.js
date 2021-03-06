import { MESSAGE_CONTENT_INDEX, MESSAGE_CONTENT_STORE, MESSAGE_CONTENT_SHOW, MESSAGE_CONTENT_UPDATE, MESSAGE_CONTENT_DELETE,
    MESSAGE_CONTENT_TEST} from './types';
import Axios from '../../rclient/masterClient';
import handler from '../../exceptions/handler';
import { setAlertAction } from './masterAlertActions';


export const messageContentIndexAction = () => {
    
    return (dispatch) => {
        Axios.get(`content/message/index`)
        .then(data => {
            dispatch({type: MESSAGE_CONTENT_INDEX,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const messageContentStoreAction = (payLoad) => {

    return (dispatch) => {
        Axios.post(`content/message/store`,payLoad)
        .then(data => {
            dispatch({type: MESSAGE_CONTENT_STORE,payLoad: data});
            dispatch(setAlertAction({id:Math.random(), alertType:'success', alertMessage:'Message was sent'}));
        })
        .catch((error) => {
            handler(error);
            dispatch(setAlertAction({id:Math.random(), alertType:'info', alertMessage:'Message was not sent'}));
        });
    }
}

export const messageContentShowAction = (payLoad) => {
    
    return (dispatch) => {
        Axios.get(`content/message/show`,payLoad)
        .then(data => {
            dispatch({type: MESSAGE_CONTENT_SHOW,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const messageContentUpdateAction = (payLoad) => {

    return (dispatch) => {
        Axios.post(`content/message/update`,payLoad)
        .then(data => {
            dispatch({type: MESSAGE_CONTENT_UPDATE,payLoad: data});
            dispatch(messageContentIndexAction());
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const messageContentDeleteAction = (payLoad) => {

    return (dispatch) => {
        Axios.post(`content/message/delete`,payLoad)
        .then(data => {
            dispatch({type: MESSAGE_CONTENT_DELETE,payLoad: data});
            dispatch(messageContentIndexAction());
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const messageContentTestAction = () => {

    return (dispatch) => {
        Axios.get(`content/message/test`)
        .then(data => {
            dispatch({type: MESSAGE_CONTENT_TEST,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}