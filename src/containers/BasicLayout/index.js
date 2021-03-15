// 3rd party libs imports
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import classNames from 'classnames';

// Project based imports
import routes from '../../routes';
import Header from '../Header';
import Footer from '../Footer';

import '../../assets/scss/main.scss';

/**
 * @author CosmicTiger
 * @description This is my main component which helps to display out
 * all the other views for the react-router library.
 * @param { className } props 
 * className is for a className that will help to identify
 * in CSS aspect what styles does the app has to apply to the view
 * @returns ReactComponent
 */
const BasicLayout = (props) => {
    const { className } = props;

    return (
        <Fragment>
            <div
                className={classNames("basic-layout container-fluid", {
                    [className]: className,
                })}
            >
                <Header />
                <Switch>
                    {routes.map((route, idx) => {
                        return route.component ? (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                    <route.component {...props} />
                                )}
                            />
                        ) : (null);
                    })}
                </Switch>
                <Footer />
            </div>
        </Fragment>
    )
}

export default BasicLayout;
