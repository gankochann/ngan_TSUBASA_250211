const initialStore = {
    listProduct : [],
};

const Reducer = ( state = initialStore, action) => {
    switch ( action.type) {
        case "GETLIST":
            return {...state, listProduct:action.payload};
        default :
        return state;
    };
};

export default Reducer;