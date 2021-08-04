/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useLocation } from 'react-router-dom';
import RenderProp from '@declarations/Interfaces/RenderPropLocationHook';

/**
 * @filedescription Hack para renderizar um class component com um hook
 * @example <RenderPropLocationHook {MyClassComponent} />
 */

const RenderPropLocationHook = ({
  RenderWithLocationHook,
}: RenderProp): React.ReactElement => {
  const _location = useLocation();

  return <RenderWithLocationHook _location={_location} />;
};

export default RenderPropLocationHook;
