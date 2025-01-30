import * as api from '../api/index.js';
import { auth, logout } from '../state/index.js';

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch(auth(data));

        navigate('/');
    } catch (error) {
        console.error("Error response:", error.response);
        console.error("Error message:", error.response?.data?.message);
        throw error;
    }
};

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch(auth(data));

        navigate('/');
    } catch (error) {
        console.error("Error response:", error.response);
        console.error("Error message:", error.response?.data?.message);
        throw error;
    }
};

export const logOut = () => async (dispatch) => {
    try {
        dispatch(logout());
    } catch (err) {
        console.log(err);
    }
};