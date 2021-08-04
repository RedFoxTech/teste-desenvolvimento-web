
import RenderPropHistoryHook from '@src/Hooks/RenderPropHistoryHook';
import React from 'react';
import Router from '@src/Router';
import { BrowserRouter } from "react-router-dom";

/**
 * @fileoverview Implementa o rotador principal que vai trazer todos os
 * outros dentro da página home.
 * @module packages/frontend/Components/App
 */

export const App = (): React.ReactElement => (
    <BrowserRouter basename="/">
        <Router />
    </BrowserRouter>
);
