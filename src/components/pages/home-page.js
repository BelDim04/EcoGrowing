import React from 'react';
import PlantList from '../plant-list';
import CurrentPlantInformation from '../current-plant-information';
import SearchPanel from "../search-panel/search-panel";

const HomePage = () => {
    return (
        <div>
            <SearchPanel />
            <PlantList />
            <CurrentPlantInformation />
            <div id="map"></div>
            <script type="text/javascript" src="../map/map.js"></script>
        </div>
    );
};

export default HomePage;