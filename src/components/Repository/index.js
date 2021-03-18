import React from 'react';
import RepositoryCard from './RepositoryCard';
import PropTypes from 'prop-types';

const Repositories = (props) => {
    const { repositories } = props;

    return (
        <div className="Repositories">
            {repositories && repositories.map((repository) => {
                return <RepositoryCard key={repository.id} repository={repository} />
            })}
        </div>
    )
}

Repositories.propTypes = {
    repositories: PropTypes.array.isRequired,
};

export default Repositories
