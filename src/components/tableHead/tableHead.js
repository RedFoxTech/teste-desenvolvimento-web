import React from 'react';

import './tableHead.css';

import arrowUp from '../../assets/arrow_up.png';
import arrowDown from '../../assets/arrow_down.png';

const TableHead = (props) => {
    return (
        <div className="d-flex justify-content-around align-items-center">
            {(props.shownText || props.id)}
            <div>
                <img src={arrowUp} className="arrow ml-3" alt="arrow up" onClick={(evt) => props.sortList(props.id, "up")}/>
                <img src={arrowDown} className="arrow" alt="arrow down" onClick={(evt) => props.sortList(props.id, "down")}/>
            </div>
        </div>
    )
}

export default TableHead;