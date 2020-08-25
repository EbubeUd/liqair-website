import { USER_INDEX, USER_STORE, USER_SHOW, USER_UPDATE, USER_DELETE,
    USER_TEST} from '../actions/types';

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
        case USER_INDEX:
            return {
                ...state,
                index:action.payLoad.data.data,
            }

        case USER_STORE:
            return {
                ...state,
                store:action.payLoad.data.data,
            }

        case USER_SHOW:
            return {
                ...state,
                show:action.payLoad.data.data,
            }

        case USER_UPDATE:
            return {
                ...state,
                update:action.payLoad.data.data,
            }

        case USER_DELETE:
            return {
                ...state,
                delete:action.payLoad.data.data,
            }

        case USER_TEST:
            return {
                ...state,
                delete:action.payLoad.data.data,
            }

        default:
            return state;
    }
}