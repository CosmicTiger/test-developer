// Spinner.js
import React from 'react';
import Loader from "react-loader-spinner";

/**
 * @author CosmicTiger
 * @description
 * A simple ReactComponent that will be a Spinner
 * for each Loading Screen available in the app
 * @returns ReactComponent
 */
const Spinner = () => {
    return (
        <div className="animated fadeIn pt-3 text-center Spinner">
            <Loader className="Spinner-loader" type="Oval" color="#00bfff" height={120} width={120} />
            <span className="Spinner-text">Loading...</span>
        </div>
    )
}

export default Spinner;
