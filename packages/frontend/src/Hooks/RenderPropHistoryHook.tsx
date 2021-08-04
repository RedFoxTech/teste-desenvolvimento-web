/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RenderProp from '@declarations/Interfaces/RenderPropHistoryHook';

/**
 * @filedescription Hack para renderizar um class component com um hook
 * @example <RenderPropHistoryHook {MyClassComponent} />
 */

const RenderPropHistoryHook = ({
  RenderWithHistoryHook,
}: RenderProp): React.ReactElement => {
  const _history = useHistory();

  return <RenderWithHistoryHook _history={_history} />;
};

export default RenderPropHistoryHook;
