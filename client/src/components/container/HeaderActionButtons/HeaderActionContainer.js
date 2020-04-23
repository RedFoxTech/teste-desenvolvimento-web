import React, { useState, useEffect } from 'react'
import "./HeaderActionContainer.css"

const HeaderActionContainer = (props) => {
    let [ elementsPerPage, setElementsPerPage] = useState(props.elementsPerPage)
    
    useEffect(() => {
        setElementsPerPage(props.elementsPerPage)
    }, [props.elementsPerPage])

    return <div className="header-container">
        <div><button onClick={props.onAddEvent} className="btn red">
            ADD</button>
        </div>

        <div><button onClick={props.onRemoveEvent} className="btn red">
            REMOVE</button>
        </div>
        <div><button onClick={() => {
            if (props.currentPage > 1) props.onChangePage(props.currentPage - 1)
        }} className="btn red">
            {'<'}</button>
        </div>
        <div><button onClick={() => {
            if (props.currentPage >= 0) props.onChangePage(props.currentPage + 1)
        }} className="btn red">
            {'>'}</button>
        </div>
    </div>
}

export default HeaderActionContainer