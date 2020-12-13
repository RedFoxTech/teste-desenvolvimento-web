import React from 'react';

const Header = (props) => {
    return (
        <>
            <div className="header-background">
                <img width="43" height="43" src={props.url}></img>
        </div>
        </>
    )
}

export default Header;