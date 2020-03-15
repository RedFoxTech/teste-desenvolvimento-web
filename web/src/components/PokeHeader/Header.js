import React from 'react';
import './Header.css';

function Header(props) {
    return  <div id="banner" className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>{props.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
}

export default Header; 