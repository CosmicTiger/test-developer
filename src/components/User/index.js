import React from 'react';
import { Button } from 'reactstrap';
import { useDispatch } from "react-redux";
import { clearUsers } from '../../redux/usersDuck';
import { map } from 'lodash';
import Spinner from '../BasicLayout/Spinner';
import UserCard from './UserCard';

const Users = (props) => {
    const { users, loading } = props;
    const dispatch = useDispatch();

    const clearHandling = () => {
        dispatch(clearUsers());
    }

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className='UsersList'>
                <div className='UsersList-wrapper'>
                    {
                        users && map(users, (user, idx) => {
                            return <UserCard key={user.id} user={user} />
                        })
                    }
                </div>
                {users.length > 0 && (
                    <div className="row justify-content-end UsersList-buttonWrapper">
                        <Button color="secondary" className="UsersList-clearButton" onClick={clearHandling}>
                            Clear
                        </Button>
                    </div>
                )}
            </div>
        )
    }
}

export default Users
