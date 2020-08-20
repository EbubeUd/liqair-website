import { VIDEO_CONTENT_INDEX, VIDEO_CONTENT_STORE, VIDEO_CONTENT_SHOW, VIDEO_CONTENT_UPDATE, VIDEO_CONTENT_DELETE,
    VIDEO_CONTENT_TEST} from '../actions/types';

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
        case VIDEO_CONTENT_INDEX:
            return {
                ...state,
                index:action.payLoad.data.data,
            }

        case VIDEO_CONTENT_STORE:
            return {
                ...state,
                store:action.payLoad.data.data,
            }

        case VIDEO_CONTENT_SHOW:
            return {
                ...state,
                show:action.payLoad.data.data,
            }

        case VIDEO_CONTENT_UPDATE:
            return {
                ...state,
                update:action.payLoad.data.data,
            }

        case VIDEO_CONTENT_DELETE:
            return {
                ...state,
                delete:action.payLoad.data.data,
            }

        case VIDEO_CONTENT_TEST:
            return {
                ...state,
                delete:action.payLoad.data.data,
            }

        default:
            return state;
    }
}