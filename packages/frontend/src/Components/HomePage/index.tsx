import React from "react";

class HomePage extends React.PureComponent<null, null> {

    render(): React.ReactNode {
        console.log("HomePage render");
        return (
            <div>
                <h1>HomePage</h1>
            </div>
        );
    }
}

export default HomePage;
