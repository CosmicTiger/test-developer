import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const UserCard = (props) => {

    const { user, className } = props;

    return (
        <div className={`UserCard ${className}`}>
            {
                className ?
                    (
                        <Fragment>
                            <div className='UserCard-header'>
                                <img src={user.avatar_url} alt={user.login} />
                                <div className='UserCard-titleWrapper'>
                                    <h3 className='UserCard-title'>{user.name}</h3>
                                    <h4 className='UserCard-title' data-id={`${user.id} - `}>@{user.login}</h4>
                                    <h4 className='UserCard-title'>@{user.twitter_username}</h4>
                                    <h5 className='UserCard-title'>
                                        <FontAwesomeIcon
                                            icon={faMapMarkerAlt}
                                            className="UserCard-mapIcon"
                                        />
                                        {user.location}
                                    </h5>
                                </div>
                            </div>
                            <div className='UserCard-body'>
                                <div className="UserCard-contentWrapper">
                                    <p className="UserCard-bio">{user.bio}</p>
                                    <div className="UserCard-badges">
                                        <span className="badge badge-light">Followers: {user.followers}</span>
                                        <span className="badge badge-warning">Following: {user.following}</span>
                                        <span className="badge badge-primary">Repositories: {user.public_repos}</span>
                                        <span className="badge badge-info">Gists: {user.public_gists}</span>
                                    </div>
                                </div>
                                <a href={user.html_url}>
                                    View Github Profile
                                </a>
                                <Link to="/">
                                    Back to Search
                                </Link>
                            </div>
                        </Fragment>
                    ) :
                    (
                        <Fragment>
                            <div className='UserCard-header'>
                                <img src={user.avatar_url} alt={user.login} />
                            </div>
                            <div className='UserCard-body'>
                                <h4 className='UserCard-title' data-id={`${user.id} - `}>@{user.login}</h4>
                                <Link to={`/user/${user.login}`}>
                                    View
                                </Link>
                            </div>
                        </Fragment>
                    )
            }
        </div>
    )
}

export default UserCard
