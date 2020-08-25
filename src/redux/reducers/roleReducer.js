import { ROLE_INDEX, ROLE_STORE, ROLE_SHOW, ROLE_UPDATE, ROLE_DELETE,
    ROLE_TEST,ROLE_ASSIGN,ROLE_RETRACT} from '../actions/types';

const initialState = {
    index:{},
    store:{},
    show:{},
    update:{},
    delete:{},
    test:{},
    assign:{},
    retract:{},
}

export default function (state=initialState, action) {

    switch (action.type) {
        case ROLE_INDEX:
            return {
                ...state,
                index:action.payLoad.data.data,
            }

        case ROLE_STORE:
            return {
                ...state,
                store:action.payLoad.data.data,
            }

        case ROLE_SHOW:
            return {
                ...state,
                show:action.payLoad.data.data,
            }

        case ROLE_UPDATE:
            return {
                ...state,
                update:action.payLoad.data.data,
            }

        case ROLE_DELETE:
            return {
                ...state,
                delete:action.payLoad.data.data,
            }

        case ROLE_TEST:
            return {
                ...state,
                delete:action.payLoad.data.data,
            }

        case ROLE_ASSIGN:
            return {
                ...state,
                assign:action.payLoad.data.data,
            }

        case ROLE_RETRACT:
            return {
                ...state,
                retract:action.payLoad.data.data,
            }

        default:
            return state;
    }
}