import React from "react";
import ClassComponent from "../Types/ClassComponent";

interface props {
    _history?: History | unknown;
}

interface RenderPropHistory {
    RenderWithHistoryHook: ClassComponent | React.ElementType<
      props
    >,
}

export default RenderPropHistory;
