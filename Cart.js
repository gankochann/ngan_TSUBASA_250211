const initialStore = {
    listCart : [],
};

const Cart = ( state = initialStore, action) => {
    switch ( action.type) {
        case "GETCARTS":
            return { ...state, listCart: action.payload};
        default :
        return state;
    };
};

export default Cart;