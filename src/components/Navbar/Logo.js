import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

/**
 * @author CosmicTiger
 * @description This function consists in only a
 * displayed component for the logo of the application
 * @returns ReactComponent
 */
const Logo = () => {
    return (
        <Link
            to="/"
            className="navbar-brand Navbar-brand"
        >
            <FontAwesomeIcon
                icon={faGithub}
                className="Navbar-logo"
            />
            Github User Search Aly System Test
        </Link>
    )
}

export default Logo;
