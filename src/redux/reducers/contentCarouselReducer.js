import { CAROUSEL_CONTENT_INDEX, CAROUSEL_CONTENT_STORE, CAROUSEL_CONTENT_SHOW, CAROUSEL_CONTENT_UPDATE, CAROUSEL_CONTENT_DELETE,
    CAROUSEL_CONTENT_TEST} from '../actions/types';

const initialState = {
    index:{},
    store:{},
    show:{},
    update:{},
    delete:{},
    test:{}
}

export default function (state=initialState, action) {

    switch (action.type) {
        case CAROUSEL_CONTENT_INDEX:
            return {
                ...state,
                index:action.payLoad.data.data,
            }

        case CAROUSEL_CONTENT_STORE:
            return {
                ...state,
                store:action.payLoad.data.data,
            }

        case CAROUSEL_CONTENT_SHOW:
            return {
                ...state,
                show:action.payLoad.data.data,
            }

        case CAROUSEL_CONTENT_UPDATE:
            return {
                ...state,
                update:action.payLoad.data.data,
            }

        case CAROUSEL_CONTENT_DELETE:
            return {
                ...state,
                delete:action.payLoad.data.data,
            }

        case CAROUSEL_CONTENT_TEST:
            return {
                ...state,
                delete:action.payLoad.data.data,
            }

        default:
            return state;
    }
}