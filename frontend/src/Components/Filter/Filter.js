import React, { useState } from 'react';
import './filter.scss';
import { Collapse } from 'reactstrap';
import { FaAngleLeft, FaAngleDown } from 'react-icons/fa';

export default function Filter({ onChange, onSearch }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="Filter-main">
            <div className="Filter-title" onClick={toggle}>
                <h4>Filter</h4>
                { isOpen ? <FaAngleLeft size={ 20 } /> : <FaAngleDown  size={ 20 } /> }
            </div>
            <Collapse isOpen={isOpen}>
                <div className="row align-items-end">
                    <div className="col-12 col-sm-4">
                        <div className="form-group">
                            <label>Name</label>
                            <input onChange={ e => onChange('name', e.target.value) } type="text" className="form-control" />
                        </div>
                        
                    </div>
                    <div className="col-12 col-sm-3">
                        <div className="form-group">
                            <label>Type</label>
                            <input onChange={ e => onChange('type', e.target.value) } type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-3">
                        <div className="form-group">
                            <label>Nº Pokedex</label>
                            <input onChange={ e => onChange('number', e.target.value) } type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-2 Filter-button">
                        <button onClick={ onSearch } className="btn btn-success btn-block">Search</button>
                    </div>
                </div>
            </Collapse>

        </div>
    )
}