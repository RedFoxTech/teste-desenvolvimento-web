import React, { useState } from 'react';
import './filter.scss';
import { Collapse } from 'reactstrap';
import { FaAngleLeft, FaAngleDown } from 'react-icons/fa';

export default function Filter({ onChange, onSearch }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const list = [
        { key: 'bug', value:  'Bug'},
        { key: 'dark', value:  'Dark'},
        { key: 'dragon', value:  'Dragon'},
        { key: 'electric', value:  'Electric'},
        { key: 'fairy', value:  'Fairy'},
        { key: 'fighting', value:  'Fighting'},
        { key: 'fire', value:  'Fire'},
        { key: 'flying', value:  'Flying'},
        { key: 'ghost', value:  'Ghost'},
        { key: 'grass', value:  'Grass'},
        { key: 'ground', value:  'Ground'},
        { key: 'ice', value:  'Ice'},
        { key: 'normal', value:  'Normal'},
        { key: 'psychic', value:  'Psychic'},
        { key: 'rock', value:  'Rock'},
        { key: 'steel', value:  'Steel'},
        { key: 'water', value:  'Water'},
    ]

    return (
        <div className="Filter-main mb-4">
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
                            <select onChange={ e => onChange('type', e.target.value) } type="text" className="form-control">
                                <option value="">Select</option>
                                {
                                    list.map(item => <option value={ item.key }>{ item.value }</option>)
                                }
                            </select>
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