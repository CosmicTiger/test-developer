import React from 'react';

// Views import for the different content of each view
const Home = React.lazy(() => import('./views/Home'));

/**
 * @author CosmicTiger
 * @description the variable Routes will only be a list
 * of the different views that would be rendered within
 * <BasicLayout/> in the format of React Router to change the
 * content in dependence of the current route of the client.
 * @returns ReactComponent[]
 */
const routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
];

export default routes;
