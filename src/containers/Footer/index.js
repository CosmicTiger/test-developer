import React from 'react'

/**
 * @author CosmicTiger
 * @description This function consists in only a
 * displayed component the footer of the redirects
 * related to my sources of communication within code relating social platform.
 * @returns ReactComponent
 */
const Footer = () => {
    return (
        <footer className="Footer container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-9 col-lg-8">
                    <p className="Footer-content">
                        View the <a href="https://github.com/CosmicTiger/test-developer">source on Github</a>
                    </p>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-4">
                    <p className="Footer-content">
                        Powered by <a href="https://github.com/CosmicTiger/">@CosmicTiger</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
