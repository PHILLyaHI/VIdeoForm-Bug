import axios from 'axios';
import { returnErrors } from './messages';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
} from "./types";

// CHECK TOKEM & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({ type: USER_LOADING });

    // GET token from state
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // If token, add to headers config
    if(token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios
        .get('/api/auth/user', config)
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data,
            err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
};



export const login = (username, password) => (dispatch) => {
    // Headers
    const config = {
        headers: {
        'Content-Type': 'application/json',
        },
    };
  
    // Request Body
    const body = JSON.stringify({ username, password });
  
    axios
        .post('/api/auth/login', body, config)
        .then((res) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAIL,
            });
        });
};


export const logout = () => (dispatch, getState) => {
    // GET token from state
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // If token, add to headers config
    if(token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios
        .get('/api/auth/logout', null, config)
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data,
            err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
};