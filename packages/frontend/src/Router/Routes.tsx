import Route from "@src/Declarations/Interfaces/Route";

import HomePage from "@components/HomePage";

const Routes: Array<Route> = [
    {
        path: "/",
        component: HomePage,
        exact: true,
    },
];

export default Routes;
