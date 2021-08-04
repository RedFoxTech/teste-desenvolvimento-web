import React from 'react';

type ClassComponent = React.ComponentClass<{_location: Location}>
  | React.Component<{_location: Location}>
  | React.PureComponent<{_location: Location}>

export default ClassComponent;
