import './Footer.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props =>
    <footer className="footer">
        <span>
            Developed with <FontAwesomeIcon icon="heart" className="text-danger" /> by B.Garcia
        </span>
    </footer>