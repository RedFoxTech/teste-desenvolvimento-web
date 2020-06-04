/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route } from 'react-router-dom';
import DefaultLayout from '~/pages/_layouts/default/index';

// eslint-disable-next-line react/prop-types
export default function RouteWrapper({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
}
