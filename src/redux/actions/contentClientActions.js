import { CLIENT_CONTENT_INDEX, CLIENT_CONTENT_STORE, CLIENT_CONTENT_SHOW, CLIENT_CONTENT_UPDATE, CLIENT_CONTENT_DELETE,
    CLIENT_CONTENT_TEST} from './types';
import Axios from '../../rclient/masterClient';
import handler from '../../exceptions/handler';


export const clientContentIndexAction = () => {
    
    return (dispatch) => {
        Axios.get(`content/client/index`)
        .then(data => {
            dispatch({type: CLIENT_CONTENT_INDEX,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const clientContentStoreAction = (payLoad) => {

    return (dispatch) => {
        Axios.post(`content/client/store`,payLoad)
        .then(data => {
            dispatch({type: CLIENT_CONTENT_STORE,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const clientContentShowAction = (payLoad) => {
    
    return (dispatch) => {
        Axios.get(`content/client/show`,payLoad)
        .then(data => {
            dispatch({type: CLIENT_CONTENT_SHOW,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const clientContentUpdateAction = (payLoad) => {

    return (dispatch) => {
        Axios.post(`content/client/update`,payLoad)
        .then(data => {
            dispatch({type: CLIENT_CONTENT_UPDATE,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const clientContentDeleteAction = (payLoad) => {

    return (dispatch) => {
        Axios.post(`content/client/delete`,payLoad)
        .then(data => {
            dispatch({type: CLIENT_CONTENT_DELETE,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const clientContentTestAction = () => {

    return (dispatch) => {
        Axios.get(`content/client/test`)
        .then(data => {
            dispatch({type: CLIENT_CONTENT_TEST,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}