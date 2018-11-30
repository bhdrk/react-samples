import * as types from './actionTypes';

export const setUser = (username, role) => {
    return {
        type: types.SET_USER,
        user: {
            username,
            role
        }
    };
};