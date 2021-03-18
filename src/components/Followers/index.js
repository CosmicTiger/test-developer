import React from 'react';
import { map } from 'lodash';
import Spinner from '../BasicLayout/Spinner';
import FollowersCard from './FollowerCard';

const Followers = (props) => {
    const { followersState } = props;

    if (followersState.loadingF) {
        return <Spinner />
    }
    else {
        return (
            <div className="FollowersList">
                <div className="FollowersList-wrapper">
                    {
                        followersState.data && map(followersState.data, (follower) => {
                            return <FollowersCard key={follower.id} follower={follower} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Followers
