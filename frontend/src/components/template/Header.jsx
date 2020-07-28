import './Header.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props =>
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">
        <FontAwesomeIcon icon="home" /> <label>{props.title}</label>
        </h1>
        <p className="lead text-muted">
            {props.subtitle}
        </p>
    </header>