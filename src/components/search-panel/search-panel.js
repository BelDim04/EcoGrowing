import React from 'react';
import { connect } from 'react-redux';

import './search-panel.css';
import {searchTermChanged} from "../../actions";

const SearchPanel= ({term,onSearchTermChanged}) =>{
        return(
            <input type="text"
                   placeholder="Поиск..."
                   value={term}
                   onChange={(e)=>onSearchTermChanged(e.target.value)}/>
        );
};

const mapStateToProps = ({ term }) => {
    return { term };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchTermChanged: (term) =>dispatch(searchTermChanged(term))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchPanel);