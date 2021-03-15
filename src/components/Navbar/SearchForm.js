import React from 'react';
import { Form, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

/**
 * @author CosmicTiger
 * @description This function consists in the athomical
 * behavior of the search form for the github users that the
 * user of the application would want to search.
 * @returns ReactComponent -> functional
 */
const SearchForm = () => {
    return (
        <Form className="Navbar-form">
            <Input className="Navbar-input" type="username" name="username" placeholder="Search a user, e.g. CosmicTiger" />
            <Button className="Navbar-button">
                <FontAwesomeIcon
                    icon={faSearch}
                    className="Navbar-buttonIcon"
                />
            </Button>
        </Form>
    )
}

export default SearchForm
