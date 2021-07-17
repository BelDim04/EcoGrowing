import React, { Component } from 'react';
import PlantListItem from '../plant-list-item';
import { connect } from 'react-redux';

import withGrowingService from '../hoc/with-growing-service';
import { fetchPlants, currentPlantChoosed } from '../../actions';
import { compose } from '../../utils';
import './plant-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const PlantList = ({ plants, onCurrentChoosed, term }) => {
    return(
        <ul>
            {
                plants.map((plant) => {
                    if(term.length===0||plant.name.toLowerCase().indexOf(term.toLowerCase())>-1)
                        return(
                            <li key={plant.id}><PlantListItem plant={plant} onCurrentChoosed={() => onCurrentChoosed(plant.id)} id={plant.id}/></li>
                        )
                    else
                        return(
                            <li key={plant.id} className="hide"><PlantListItem plant={plant} onCurrentChoosed={() => onCurrentChoosed(plant.id)} id={plant.id}/></li>
                        )
                })
            }
        </ul>
    );
};

class PlantListContainer extends Component {

    componentDidMount() {
        this.props.fetchPlants();
    }

    render() {
        const { plants, loading, error, onCurrentChoosed, term } = this.props;

        if(loading){
            return <Spinner />
        }

        if(error){
            return <ErrorIndicator />
        }

        return <PlantList plants={plants} onCurrentChoosed={onCurrentChoosed} term={term}/>
    }
}

const mapStateToProps = ({ plants, loading, error, term }) => {
    return { plants, loading, error, term };
};

const mapDispatchToProps = (dispatch, { growingService }) => {
    return {
        fetchPlants: fetchPlants(growingService, dispatch),
        onCurrentChoosed: (id) =>dispatch(currentPlantChoosed(id))
    };
};

export default compose(
    withGrowingService(),
    connect(mapStateToProps, mapDispatchToProps)
)(PlantListContainer);