import React from 'react';
import { connect } from 'react-redux';

import './current-plant-information.css';

const CurrentPlantInformation= ({current, plants}) =>{
    if(current>0)
    return(
        <span>{plants.find(plant => plant.id === current).name}</span>
    );
    return null;
};

const mapStateToProps = ({ current, plants }) => {
    return { current, plants };
};

export default connect(mapStateToProps)(CurrentPlantInformation);