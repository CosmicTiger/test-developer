import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { searchUsers } from '../../redux/usersDuck';

/**
 * @author CosmicTiger
 * @description This function consists in the athomical
 * behavior of the search form for the github users that the
 * user of the application would want to search.
 * @returns ReactComponent
 */
const SearchForm = () => {
    // state of the text that the user will input
    const [text, setText] = useState('');
    // instance of history from react-router with its hook
    const history = useHistory();
    // instance of the dispatch that our redux store contains
    const dispatch = useDispatch();

    /**
     * @author CosmicTiger
     * @description This function will trigger
     * the action for the search in usersDuck.js
     * @returns dispatch() <action>
     */
    const searchData = (text) => {
        dispatch(searchUsers(text));
    }

    /**
     * @author CosmicTiger
     * @description This function consists in the athomical
     * behavior of the search form for the github users that the
     * user of the application would want to search.
     * @returns ReactComponent
     */
    const onChange = e => {
        setText(e.target.value);
    }

    /**
     * @author CosmicTiger
     * @description This event function will
     * prevent the default state of the event listener of the
     * form and afterwards will validate if the user didn't put
     * a possible username to search, if he writes the word 'react'
     * which not be valid or if he write a username minor than 4 in lenght
     * after each validation were false, then would execute the function
     * that it'll trigger the redux action
     * @returns function()
     */
    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alert('Error, you must provide a username for the search');
            return;
        } else if (text.length < 4) {
            alert('Error, you must provide a username with a valid length');
            return;
        } else if (text.toUpperCase() === 'REACT') {
            alert('Error, you cannot write react or React. You must provide a username for the search');
            return;
        } else {
            searchData(text);
            history.push('/');
        }
    }

    return (
        <Form className="Navbar-form" onSubmit={onSubmit}>
            <Input
                className="Navbar-input"
                type="username"
                name="username"
                placeholder="Search a user, e.g. CosmicTiger"
                value={text}
                onChange={onChange}
            />
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
