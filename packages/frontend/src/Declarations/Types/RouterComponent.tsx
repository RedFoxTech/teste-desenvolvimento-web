import Route from "../Interfaces/Route";

type RouterProps = {
    _history: History,
}

type RouterState = {
    routes: Route[],
}

export {
    RouterProps,
    RouterState,
};
