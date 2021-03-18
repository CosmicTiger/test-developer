// index.js (Profile)
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getRepos } from '../../redux/usersDuck';
import { getFollowers } from '../../redux/followersDuck';
import UserCard from '../../components/User/UserCard';
import Repositories from '../../components/Repository';
import Followers from '../../components/Followers';

const Profile = (props) => {
    const { match } = props;
    const username = match.params.login;
    const dispatch = useDispatch();
    const userState = useSelector(state => state.users);
    const followersState = useSelector(state => state.followers);

    useEffect(() => {
        dispatch(getUser(username));
        dispatch(getRepos(username));
        dispatch(getFollowers(username));
    }, [dispatch, username]);

    if (userState.loading) {
        return <p>Loading...</p>
    }

    return (
        <main className="Profile">
            <div className="Profile-header">
                <UserCard className="Details" user={userState.user} />
            </div>
            <div className="Profile-body">
                <Repositories repositories={userState.repos} />
                <Followers followersState={followersState} />
            </div>
        </main>
    )
}

export default Profile

