import apiClient from '../helpers/ApiClient';

const GET_DEPARTMENTS = 'app/departments/GET_DEPARTMENTS';
const GET_DEPARTMENTS_SUCESS = 'app/departments/GET_DEPARTMENTS_SUCESS';
const GET_DEPARTMENTS_FAIL = 'app/departments/GET_DEPARTMENTS_FAIL';

const initialState = {
    loading: false,
    items: []
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case GET_DEPARTMENTS: {
            return {
                ...state,
                loading: true
            };
        }

        case GET_DEPARTMENTS_SUCESS: {
            const { payload } = action;

            return {
                ...state,
                items: payload,
                loading: false
            };
        }

        case GET_DEPARTMENTS_FAIL: {
            return {
                ...state,
                loading: false
            };
        }

        default:
            return state;

    }
}

export function getDepartments() {
    return (dispatch) => {
        dispatch({
            type: GET_DEPARTMENTS
        });

        apiClient('get', 'departments')
            .then((res) => {
                dispatch({
                    type: GET_DEPARTMENTS_SUCESS,
                    payload: res
                });
            })
            .catch(() => {
                dispatch({
                    type: GET_DEPARTMENTS_FAIL
                });
            });
    };
}
