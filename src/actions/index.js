
const plantsRequested = () => {
    return{
        type: 'FETCH_PLANTS_REQUEST'
    }
};

const plantsLoaded = (newPlants) => {
    return {
        type: 'FETCH_PLANTS_SUCCESS',
        payload: newPlants
    };
};

const plantsError = (error) => {
    return {
        type: 'FETCH_PLANTS_FAILURE',
        payload: error
    }
}

const currentPlantChoosed = (current) => {
    return {
        type: 'CURRENT_PLANT_CHOOSED',
        payload: current
    }
}

const searchTermChanged = (term) => {
    return {
        type: 'SEARCH_TERM_CHANGED',
        payload: term
    }
}

const fetchPlants = (growingService, dispatch) => () => {
    dispatch(plantsRequested());
    growingService.getPlants()
        .then((data) => dispatch(plantsLoaded(data)))
        .catch((err) => dispatch(plantsError(err)));
}

export {
    fetchPlants,
    currentPlantChoosed,
    searchTermChanged
};