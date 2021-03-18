import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFollower, clearFollower } from '../../redux/followersDuck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const FollowersCard = (props) => {
    const { follower } = props;
    const followerState = useSelector(state => state.getFollower(follower));

    console.log(followerState);

    return (
        <div className="FollowerCard">
            <div className='FollowerCard-header'>
                <img src={follower.avatar_url} alt={follower.login} />
            </div>
            <div className='FollowerCard-body'>
                <h4 className='FollowerCard-title'>@{follower.login}</h4>
                <h5 className='UserCard-title'>
                    <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="UserCard-mapIcon"
                    />
                    {follower.location}
                </h5>
                <a href={follower.html_url}>
                    View
                </a>
            </div>
        </div>
    )
}

export default FollowersCard
