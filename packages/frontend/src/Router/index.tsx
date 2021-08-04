/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Router, Switch } from 'react-router-dom';
import Route from './Route';
import RouteType from '@declarations/Interfaces/Route'
import routes from './Routes';
import RenderPropLocationHook from '../Hooks/RenderPropLocationHook';
import { RouterProps, RouterState } from '@declarations/Types/RouterComponent';
// A router that uses has fade in out animation

import '@styles/routerAnimation.module.scss';
import RenderPropHistoryHook from '@src/Hooks/RenderPropHistoryHook';

class AnimatedRouter extends React.PureComponent<
  RouterProps,
  RouterState
> {
  constructor(props: RouterProps) {
    super(props);
    this.state = {
      routes: [],
    };
  }

  componentDidMount(): void {
    this.setState({ routes });
  }

  render(): React.ReactNode {
    const _routes = this.state.routes;
    return (

      <RenderPropHistoryHook RenderWithHistoryHook={(
        { _history }:
        { _history: History }) => (
        <Router history={_history as never}>
      
          <RenderPropLocationHook RenderWithLocationHook={(
          { _location }:
          {_location: Location}) => (
          <Switch location={_location as never}>
            <div id="main-wrapper">

              {/*
            This is no different than other usage of
            <CSSTransition>, just make sure to pass
            `location` to `Switch` so it can match
            the old location as it animates out.
          */}

              {_routes.map((route: RouteType, key: number) => (
                <Route
                  path={route.path}
                  exact={route.exact ? true : undefined}
                  component={route.component}
                  /**
                   * This is not a problem as routes will not be updated
                   * {@link https://stackoverflow.com/questions/46735483/error-do-not-use-array-index-in-keys}
                   */
                  // eslint-disable-next-line react/no-array-index-key
                  key={key}
                />
              ))}

            </div>
          </Switch>
        )}
        />
      </Router>
        )} />

    );
  }
}

export default AnimatedRouter;
