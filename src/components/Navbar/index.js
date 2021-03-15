import React from 'react';
import Logo from './Logo';
import SearchForm from './SearchForm';

/**
 * @author CosmicTiger
 * @description This function consists in the composition
 * of the Navbar and in their atomical components like
 * <Logo /> and <SearchForm />
 * @returns ReactComponent
 */
const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <Logo />
            <SearchForm />
        </nav>
    )
}

export default Navbar
