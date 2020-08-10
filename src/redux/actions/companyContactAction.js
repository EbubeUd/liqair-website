import { MESSAGE_COMPANY_SERVICES, MESSAGE_COMPANY_GENERAL } from './types';
import Axios from '../../rclient/masterClient';
import handler from '../../exceptions/handler';
import { setAlertAction } from './masterAlertActions';

export const companyServicesAction = (payLoad) => {
    return (dispatch) => {
        Axios.post(``,{...payLoad})
        .then(data => {
            dispatch({type: MESSAGE_COMPANY_SERVICES,payLoad: data});
            dispatch(setAlertAction({id:Math.random(), alertType:'success', alertMessage:'Your Message was sent'}));
        })
        .catch((error) => {
            handler(error);
        });
    }
}

export const contactCompanyAction = (payLoad) => {
    return (dispatch) => {
        Axios.post(``,{...payLoad})
        .then(data => {
            dispatch({type: MESSAGE_COMPANY_GENERAL,payLoad: data});
            dispatch(setAlertAction({id:Math.random(), alertType:'success', alertMessage:'Your Message was sent'}));
        })
        .catch((error) => {
            handler(error);
        });
    }
}
