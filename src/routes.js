import React from 'react';

// Views import for the different content of each view
// Main view of the search
const Home = React.lazy(() => import('./views/Home'));
// View for the details of each Github User
const Profile = React.lazy(() => import('./views/Profile'));
// View for any type of wrong path inserted by the user
const NotFound = React.lazy(() => import('./views/NotFound'));

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
    { path: '/user/:login', exact: true, name: 'Profile', component: Profile },
    { component: NotFound }
];

export default routes;
