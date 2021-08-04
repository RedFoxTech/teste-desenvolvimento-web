
import RenderPropHistoryHook from '@src/Hooks/RenderPropHistoryHook';
import React from 'react';
import { Router } from 'react-router-dom';

/**
 * @fileoverview Implementa o componente principal que vai trazer todos os
 * outros dentro da página home.
 * @module packages/frontend/Components/App
 */

export const App = (): React.ReactElement => (
    <>
        <RenderPropHistoryHook RenderWithHistoryHook={
            ({_history }:
                {_history: History}) => <Router history={_history as never}/>
        }/>
        
    </>
);
