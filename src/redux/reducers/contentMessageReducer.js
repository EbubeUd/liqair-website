import { MESSAGE_CONTENT_INDEX, MESSAGE_CONTENT_STORE, MESSAGE_CONTENT_SHOW, MESSAGE_CONTENT_UPDATE, MESSAGE_CONTENT_DELETE,
    MESSAGE_CONTENT_TEST} from '../actions/types';

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
        case MESSAGE_CONTENT_INDEX:
            return {
                ...state,
                index:action.payLoad.data.data,
            }

        case MESSAGE_CONTENT_STORE:
            return {
                ...state,
                store:action.payLoad.data.data,
            }

        case MESSAGE_CONTENT_SHOW:
            return {
                ...state,
                show:action.payLoad.data.data,
            }

        case MESSAGE_CONTENT_UPDATE:
            return {
                ...state,
                update:action.payLoad.data.data,
            }

        case MESSAGE_CONTENT_DELETE:
            return {
                ...state,
                delete:action.payLoad.data.data,
            }

        case MESSAGE_CONTENT_TEST:
            return {
                ...state,
                delete:action.payLoad.data.data,
            }

        default:
            return state;
    }
}