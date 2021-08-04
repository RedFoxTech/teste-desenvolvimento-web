import RouteType from '@src/Declarations/Interfaces/Route';
import React, { ComponentState } from 'react';
import { Route as ReactDomRoute, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import '@styles/routerAnimation.module.scss';

const Route = ({
    component: Component,
    // path,
    // exact,
    // strict,
    // children,
    ...rest
}: RouteType): React.ComponentElement<null,
ComponentState> => {

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
