import React from "react";
import LinearProgress from '@material-ui/core/LinearProgress';





function Loading ( ) {
    return (
        <div>  
         <LinearProgress color="primary" />
         <LinearProgress color="primary"/>
         <LinearProgress color="primary"/>
         
        </div>
    )
}

export default Loading;