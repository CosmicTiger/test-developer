import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = (props) => {

    const { user } = props;

    return (
        <div className='UserCard'>
            <div className='UserCard-header'>
                <img src={user.avatar_url} alt={user.login} />
            </div>
            <div className='UserCard-body'>
                <h4 className='UserCard-title' data-id={`${user.id} - `}>@{user.login}</h4>
                <Link to={`/users/${user.login}`}>
                    View
                </Link>
            </div>
        </div>
    )
}

export default UserCard
