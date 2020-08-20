import { VIDEO_CONTENT_INDEX, VIDEO_CONTENT_STORE, VIDEO_CONTENT_SHOW, VIDEO_CONTENT_UPDATE, VIDEO_CONTENT_DELETE,
    VIDEO_CONTENT_TEST} from './types';
import Axios from '../../rclient/masterClient';
import handler from '../../exceptions/handler';


export const videoContentIndexAction = () => {
    
    return (dispatch) => {
        Axios.get(`content/video/index`)
        .then(data => {
            dispatch({type: VIDEO_CONTENT_INDEX,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const videoContentStoreAction = (payLoad) => {

    return (dispatch) => {
        Axios.post(`content/video/store`,payLoad)
        .then(data => {
            dispatch({type: VIDEO_CONTENT_STORE,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const videoContentShowAction = (payLoad) => {
    
    return (dispatch) => {
        Axios.get(`content/video/show`,payLoad)
        .then(data => {
            dispatch({type: VIDEO_CONTENT_SHOW,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const videoContentUpdateAction = (payLoad) => {

    return (dispatch) => {
        Axios.post(`content/video/update`,payLoad)
        .then(data => {
            dispatch({type: VIDEO_CONTENT_UPDATE,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const videoContentDeleteAction = (payLoad) => {

    return (dispatch) => {
        Axios.post(`content/video/delete`,payLoad)
        .then(data => {
            dispatch({type: VIDEO_CONTENT_DELETE,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const videoContentTestAction = () => {

    return (dispatch) => {
        Axios.get(`content/video/test`)
        .then(data => {
            dispatch({type: VIDEO_CONTENT_TEST,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}