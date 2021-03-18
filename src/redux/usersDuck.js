// usersDuck.js
// import assignAll from 'lodash/fp/assignAll';
import { github, PER_PAGE } from '../utils/constants';

/**
 * @author CosmicTiger
 * @description
 * usersDuck.js is a redux-duck standard way of creating
 * the abstraction of an entity. We set here the 3 pieces
 * of code important for a state in redux to exists>
 * Types, Actions and Reducers
 * 
 * This standard was use to make the most clean code possible
 * in redux.
 */

// Our initial state
const initialState = {
    data: [],
    user: {},
    repos: [],
    loading: false
}

// Types
const types = {
    SEARCH_USERS: 'SEARCH_USERS',
    CLEAR_USERS: 'CLEAR_USERS',
    SET_LOADING: 'SET_LOADING',
    GET_USER: 'GET_USER',
    GET_REPOS: 'GET_REPOS',
}

// Reducer
/**
 * @author CosmicTiger
 * @description
 * userReducer is our main chunk of code that will decide
 * through a switch case which action would be triggered
 * to do actions in our redux store
 * @params Object, function()
 * @returns function()
 */
export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case types.SEARCH_USERS:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case types.SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case types.CLEAR_USERS:
            return state = initialState;
        case types.GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case types.GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

// Actions
/**
 * @author CosmicTiger
 * @description
 * we made this setLoading to change the state
 * of the loading property while the request is executing
 * to retrieve the data asked to the api
 * @params function() <dispatch()>
 * @returns action() <type>
 */
const setLoading = (dispatch) => dispatch({ type: types.SET_LOADING });

/**
 * @author CosmicTiger
 * @description
 * we create an object reducer to have a single reducer that's going
 * to be the merge of all the reducers
 * @params Object
 * @returns Object
 */
export const clearUsers = () => (dispatch) => {
    setLoading(dispatch);
    dispatch({ type: types.CLEAR_USERS });
}

/**
 * @author CosmicTiger
 * @description
 * we create an object reducer to have a single reducer that's going
 * to be the merge of all the reducers
 * @params string => async function() <dispatch>
 * @returns Object <state>
 */
export const searchUsers = (text) => async (dispatch) => {
    setLoading(dispatch);

    const data = await github
        .get('search/users', {
            params: {
                q: text,
                per_page: PER_PAGE
            }
        })
        .then(res => {
            dispatch({
                type: types.SEARCH_USERS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: types.GET_USERS_ERROR,
                payload: err.response.message
            })
        });

    return data;
}

/**
 * @author CosmicTiger
 * @description
 * we create an object reducer to have a single reducer that's going
 * to be the merge of all the reducers
 * @params Object
 * @returns Object
 */
export const getUser = username => (dispatch) => {
    setLoading(dispatch);

    return github.get(`users/${username}`)
        .then(res => {
            dispatch({
                type: types.GET_USER,
                payload: res.data
            })
        });
}

export const getRepos = username => async (dispatch) => {
    setLoading(dispatch);

    const data = await github
        .get(`users/${username}/repos`, {
            params: {
                per_page: PER_PAGE,
                sort: 'created:asc'
            }
        })
        .then(res => {
            dispatch({
                type: types.GET_REPOS,
                payload: res.data,
            });
        });

    return data;
}
