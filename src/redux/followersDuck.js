import { github, PER_PAGE } from '../utils/constants';

// Our initial state
const initialState = {
    data: [],
    follower: {},
    repos_count: 0,
    loadingF: false
}

// Types
const types = {
    GET_FOLLOWERS: 'GET_FOLLOWERS',
    CLEAR_FOLLOWERS: 'CLEAR_FOLLOWERS',
    SET_LOADINGF: 'SET_LOADINGF',
    GET_FOLLOWER: 'GET_FOLLOWER',
    CLEAR_FOLLOWER: 'CLEAR_FOLLOWER',
    GET_FOLLOWERS_REPOS_COUNT: 'GET_FOLLOWERS_REPOS_COUNT',
}

export default function followersReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_FOLLOWERS:
            return {
                ...state,
                data: action.payload,
                loadingF: false
            };
        case types.SET_LOADINGF:
            return {
                ...state,
                loadingF: true
            }
        case types.CLEAR_FOLLOWERS:
            return state = initialState;
        case types.GET_FOLLOWER:
            if (state.follower) {
                state.follower = {};
            }
            return {
                ...state,
                follower: action.payload,
                loadingF: false
            }
        case types.CLEAR_FOLLOWER:
            return {
                ...state,
                follower: {},
                loadingF: false
            }
        case types.GET_FOLLOWERS_REPOS_COUNT:
            return {
                ...state,
                repos_count: action.payload,
                loadingF: false
            }
        default:
            return state;
    }
}

const setLoadingF = (dispatch) => dispatch({ type: types.SET_LOADINGF });

export const clearFollowers = () => (dispatch) => {
    setLoadingF(dispatch);
    dispatch({ type: types.CLEAR_FOLLOWERS });
}

export const clearFollower = () => (dispatch) => {
    setLoadingF(dispatch);
    dispatch({ type: types.CLEAR_FOLLOWER });
}

export const getFollowers = (username) => async (dispatch) => {
    setLoadingF(dispatch);

    const data = await github
        .get(`users/${username}/followers`, {
            per_page: PER_PAGE,
            sort: 'created:desc'
        })
        .then(res => {
            dispatch({
                type: types.GET_FOLLOWERS,
                payload: res.data,
            });
        });

    return data;
}

export const getFollower = followerUsername => (dispatch) => {
    setLoadingF(dispatch);
    const follower = github.get(`users/${followerUsername}`)
        .then(res => {
            dispatch({
                type: types.GET_FOLLOWER,
                payload: res.data,
            });
        });

    return follower;
}

export const getReposCountFollower = followerUsername => async (dispatch) => {
    setLoadingF(dispatch);

    const data = github.get(`users/${followerUsername}/repos`)
        .then(res => {
            const reposCount = res.data.length;

            dispatch({
                type: types.GET_FOLLOWERS_REPOS_COUNT,
                payload: reposCount
            });
        });

    return data;
}
