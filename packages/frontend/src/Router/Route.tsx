import RouteType from '@src/Declarations/Interfaces/Route';
import React from 'react';
import { Route as ReactDomRoute, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './routeTransition.scss.css';

const Route = ({
    component: Component,
    // path,
    // exact,
    // strict,
    // children,
    ...rest
}: RouteType): React.ReactNode => {

  /* <Route {..rest}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route> */
  return (
    <ReactDomRoute
      {...rest}
    >
      {({ match }) => (
        <CSSTransition
          in={match != null}
          timeout={350}
          classNames="page"
          unmountOnExit
        >
          <div className="page">
             <Component />
          </div>
        </CSSTransition>
      )}
    </ReactDomRoute>

  );
};

export default Route;
