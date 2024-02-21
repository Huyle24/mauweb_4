import * as actionTypes from '../actions/type';
const initialState = {
    isLoading: false
};
export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_CART_LIST:
            return {
                ...state,
                isLoading: true
            };
        case actionTypes.ADD_CART_LIST_SUCCESS:
            return {
                ...action.payload,
                isLoading: false,
            };
        case actionTypes.ADD_CART_LIST_ERROR:
            return {
                ...action.payload,
                isLoading: false,
            };

        default:
            return state;
    }
}