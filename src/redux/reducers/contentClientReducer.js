import { CLIENT_CONTENT_INDEX, CLIENT_CONTENT_STORE, CLIENT_CONTENT_SHOW, CLIENT_CONTENT_UPDATE, CLIENT_CONTENT_DELETE,
    CLIENT_CONTENT_TEST} from '../actions/types';

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
        case CLIENT_CONTENT_INDEX:
            return {
                ...state,
                index:action.payLoad.data.data,
            }

        case CLIENT_CONTENT_STORE:
            return {
                ...state,
                store:action.payLoad.data.data,
            }

        case CLIENT_CONTENT_SHOW:
            return {
                ...state,
                show:action.payLoad.data.data,
            }

        case CLIENT_CONTENT_UPDATE:
            return {
                ...state,
                update:action.payLoad.data.data,
            }

        case CLIENT_CONTENT_DELETE:
            return {
                ...state,
                delete:action.payLoad.data.data,
            }

        case CLIENT_CONTENT_TEST:
            return {
                ...state,
                delete:action.payLoad.data.data,
            }

        default:
            return state;
    }
}