
const initialState = {
    plants: [],
    loading: true,
    error: null,
    current: -1,
    term: ''
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_PLANTS_REQUEST':
            return{
              plants: [],
              loading: true,
                error: null,
                current: -1,
                term: state.term
            };
        case 'FETCH_PLANTS_SUCCESS':
            return {
                plants: action.payload,
                loading: false,
                error: null,
                current: 0,
                term: state.term
            };
        case 'FETCH_PLANTS_FAILURE':
            return{
                plants: [],
                loading: false,
                error: action.payload,
                current: -1,
                term: state.term
            };
        case 'CURRENT_PLANT_CHOOSED':
            return{
                plants: state.plants,
                loading: state.loading,
                error: state.error,
                current: action.payload,
                term: state.term
            };
        case 'SEARCH_TERM_CHANGED':
            return{
                plants: state.plants,
                loading: state.loading,
                error: state.error,
                current: state.current,
                term: action.payload
            };

        default:
            return state;
    }
};

export default reducer;