import React from 'react';
import PropTypes from 'prop-types';

const RepositoryCard = (props) => {
    const { repository } = props;

    return (
        <div className="RepositoryCard">
            <div className="RepositoryCard-header">
                <h5><a href={repository.html_url}>{repository.name}</a></h5>
            </div>
            <div className="RepositoryCard-body">
                <span></span>
            </div>
        </div>
    )
}

RepositoryCard.propTypes = {
    repository: PropTypes.object.isRequired,
}

export default RepositoryCard
