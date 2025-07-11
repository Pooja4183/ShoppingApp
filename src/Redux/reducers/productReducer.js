import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE } from '../actions/productActions'

const intialState = {
    products:[],
    loading:false,
    error: null,
};

const productReducer =(state=intialState, action)=>{
switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
        return{
...state,
loading:true,
error:null,

        }
        
   case FETCH_PRODUCT_SUCCESS:
    return{
        ...state,
        loading:false,
        products:action.payload,
    };

    case FETCH_PRODUCT_FAILURE:
    return{
        ...state,
        loading:false,
        error:action.payload,

    };

    default:
        return state;
}
};

export default productReducer;