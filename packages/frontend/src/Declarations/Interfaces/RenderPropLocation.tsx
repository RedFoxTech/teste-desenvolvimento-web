import React from "react";
import ClassComponent from "../Types/ClassComponent";

interface props {
    _location?: Location | unknown;
}

interface RenderPropLocation {
    RenderWithLocationHook: ClassComponent | React.ElementType<
      props
    >,
}

export default RenderPropLocation;
