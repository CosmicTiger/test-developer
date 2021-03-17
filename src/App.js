import React from 'react';
import { Route } from 'react-router-dom';
import Spinner from './components/BasicLayout/Spinner';

import './assets/scss/main.scss';

// Containers imports taking profit of lazy method from React library
// a setTimeout was added to use the Loading Spinner
const BasicLayout = React.lazy(() => new Promise((resolve) => {
  setTimeout(() => resolve(import('./containers/BasicLayout/index')), 500)
}));

/**
 * @author CosmicTiger
 * @description BrowserRouter will onlye set the basis for the
 * constant routing of the different views of the application
 * knowing that <BasicLayout/> will not be changed between those views.
 * With, React.Supense will only be for a matter of to much content to
 * load for each view.
 * @returns Route:ReactComponent
 */
function App() {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Route path="/" name="Main" component={BasicLayout} />
    </React.Suspense>
  );
}

export default App;
