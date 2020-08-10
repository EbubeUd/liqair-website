import { MESSAGE_COMPANY_SERVICES, MESSAGE_COMPANY_GENERAL } from '../actions/types';

const initialState = {
    messageCompanyServices: {},
    messageCompanyGeneral: {},
}

export default function (state=initialState, action) {

    switch (action.type) {
        case MESSAGE_COMPANY_SERVICES:
            return {
                ...state,
                messageCompanyServices:action.payLoad,
            }

        case MESSAGE_COMPANY_GENERAL:
            return {
                ...state,
                messageCompanyGeneral:action.payLoad
            }

        default:
            return state;
    }
}