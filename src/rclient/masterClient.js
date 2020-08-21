import axios from 'axios';
import { getUserDetails, storeInstance } from '../support/reducerSupport';
import { retryAgain } from '../support/sessionSupport';
import { refreshUserTokenAction, logoutUserAction } from '../redux/actions/masterAuthActions';

// Create an axios instance
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 60000,
  headers:{Authorization:''}
});

// Add a request interceptor
instance.interceptors.request.use(req => {

  // Get logged in user details
  const userDetails = getUserDetails('master');
  const token = userDetails.token ?? 'default';

  // inject tokens to headers
  req.headers['Authorization'] = 'Bearer '+token;

  return req;
});

// Add a response interceptor
instance.interceptors.response.use((response) => {

    // Check for no content status
    if (response.status === 204) { response.data = {data:{}}; }
    return response;
  },
  async (error) => {
    
    // check if the error error is due to expired token
    if (error.response && error.response.status === 401) {

      try {
        const userDetails = getUserDetails('master');
        const token = userDetails.token;
        const id = userDetails.id;

        // Refresh token and retry request
        await axios.post(`${process.env.REACT_APP_API_URL}auth/refresh`,{headers:{Authorization:'Bearer '+token}})
        .then((refreshTokenResponse)=>{

          // Send new token to reducer
          storeInstance().dispatch(refreshUserTokenAction(refreshTokenResponse));

          // Check if retry limit has been exceeded
          if(!retryAgain(id+'_retries',5)){return Promise.reject(error);}

          // Retry the failed request with returned token
          instance.request({...error.config, headers: {
              ...error.config.headers,
              Authorization: 'Bearer '+refreshTokenResponse.data.data.access_token,
            },
          })
          .then((newResponse)=>{

            // Check for no content status
            if (newResponse.status === 204) { newResponse.data = {data:{}}; }
            return newResponse;

          }).catch((error) => { return Promise.reject(error); });

        }).catch((error)=>{return Promise.reject(error);});

      } catch (err) {

        // Logout user
        storeInstance().dispatch(logoutUserAction());
        return Promise.reject(error);
      }
    }

    if (error.code === 'ECONNABORTED'){
      alert(`Could not connect to network`);
    }

    return Promise.reject(error);
  }
);

export default instance;