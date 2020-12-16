import React from 'react';
import './plant-list-item.css';

const PlantListItem = ({ plant, onCurrentChoosed, id }) => {
    const { name } = plant;
        return (
            <div>
                <button onClick={onCurrentChoosed} className="plantBtn" id={id}>{name}</button>
            </div>
        );
};

export default PlantListItem;