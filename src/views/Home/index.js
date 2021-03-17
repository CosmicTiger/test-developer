import React from 'react';
import { size } from "lodash";
import { connect, useSelector } from "react-redux";
import Users from '../../components/User';
/**
 * @author CosmicTiger
 * @description This function consists in
 * the main view of the application being
 * the '/' route
 * @returns ReactComponent
 */
const Home = () => {
    const users = useSelector(state => state.users);
    return (
        <main className="Home">
            {size(users.data.items) === 0 && (
                <div className="Home-body">
                    <h3>There's no users, please try to search a user</h3>
                </div>
            )}
            {size(users.data.items) > 0 && <Users users={users.data.items} loading={users.loading} />}
        </main>
    )
}

function mapState(state) {
    return {
        users: state.users
    }
};

export default connect(mapState)(Home);
