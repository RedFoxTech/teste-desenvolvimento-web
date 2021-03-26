import React from 'react';
//Loader
import { usePromiseTracker } from 'react-promise-tracker';

const LoadingIndicator = (props) =>
{
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <div className="progress blue-grey lighten-5">
        <div className="indeterminate blue-grey lighten-3"></div>
      </div>
    )
  );
};
export default LoadingIndicator;
