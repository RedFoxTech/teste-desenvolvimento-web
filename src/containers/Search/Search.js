import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import './Search.css';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const Search = (props) => {

    const [timeOut, setTimeOut] = useState(0);

    const onAttributeSelection = (evt) => {
        if(timeOut) {
            clearTimeout(timeOut)
        };
        const searchingFor = evt.target.value;
        let search = null;
        if (Number(searchingFor)) {
            search = Number(searchingFor)
        } else {
            search = searchingFor;
        }
        setTimeOut(setTimeout( () => {
            props.onSendSearch(search)
        }, 1000))
    }

    let dropdownItems = "";
    if(props.params){
        let params = Object.keys(props.params);
        dropdownItems = params.map( param => {
            if(param !== "Row" && param !== "Img name") {
                return <option key={param}>{param}</option>
            }
        })
    }

    return (
        <div className={props.className}>
            <InputGroup>
                <FormControl
                placeholder={props.placeholder}
                aria-label="searchFor"
                aria-describedby="basic-addon2"
                onChange={(evt) => onAttributeSelection(evt)}              
            />
            </InputGroup>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onSendSearch: (searching) => dispatch({type: "START_SEARCH", searchParams: searching})
    }
}

export default connect(null, mapDispatchToProps)(Search);