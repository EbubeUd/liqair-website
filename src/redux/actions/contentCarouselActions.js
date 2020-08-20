import { CAROUSEL_CONTENT_INDEX, CAROUSEL_CONTENT_STORE, CAROUSEL_CONTENT_SHOW, CAROUSEL_CONTENT_UPDATE, CAROUSEL_CONTENT_DELETE,
    CAROUSEL_CONTENT_TEST} from './types';
import Axios from '../../rclient/masterClient';
import handler from '../../exceptions/handler';


export const carouselContentIndexAction = () => {
    
    return (dispatch) => {
        Axios.get(`content/carousel/index`)
        .then(data => {
            dispatch({type: CAROUSEL_CONTENT_INDEX,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const carouselContentStoreAction = (payLoad) => {

    return (dispatch) => {
        Axios.post(`content/carousel/store`,payLoad)
        .then(data => {
            dispatch({type: CAROUSEL_CONTENT_STORE,payLoad: data});
            dispatch(carouselContentIndexAction());
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const carouselContentShowAction = (payLoad) => {
    
    return (dispatch) => {
        Axios.get(`content/carousel/show`,payLoad)
        .then(data => {
            dispatch({type: CAROUSEL_CONTENT_SHOW,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const carouselContentUpdateAction = (payLoad) => {

    return (dispatch) => {
        Axios.post(`content/carousel/update`,payLoad)
        .then(data => {
            dispatch({type: CAROUSEL_CONTENT_UPDATE,payLoad: data});
            dispatch(carouselContentIndexAction());
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const carouselContentDeleteAction = (payLoad) => {

    return (dispatch) => {
        Axios.post(`content/carousel/delete`,payLoad)
        .then(data => {
            dispatch({type: CAROUSEL_CONTENT_DELETE,payLoad: data});
            dispatch(carouselContentIndexAction());
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const carouselContentTestAction = () => {

    return (dispatch) => {
        Axios.get(`content/carousel/test`)
        .then(data => {
            dispatch({type: CAROUSEL_CONTENT_TEST,payLoad: data});
        })
        .catch((error) => {
            handler(error);
        });
    }
}