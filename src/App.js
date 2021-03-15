import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// A simple component that will be set when the view is loading
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers imports taking profit of lazy method from React library
const BasicLayout = React.lazy(() => import('./containers/BasicLayout/index'));

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
    <BrowserRouter>
      <React.Suspense fallback={loading()}>
        <Route path="/" name="Main" component={BasicLayout} />
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
