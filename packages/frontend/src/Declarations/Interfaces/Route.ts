import React, { Component } from "react";

interface Route {
    component: React.ComponentClass<unknown>;
    path: string;
    exact?: boolean;
    strict?: boolean;
    children?: Route[];
}

export default Route;

