import { FETCH_PRODUCT_ID_REQUEST, FETCH_PRODUCT_ID_SUCCESS, FETCH_PRODUCT_ID_FAILURE } from './productDetailAction'

const intialState = {
    product:{},
    loading:false,
    error: null,
};

const product_IdReducer =(state=intialState, action)=>{
switch (action.type) {
    case FETCH_PRODUCT_ID_REQUEST:
        return{
...state,
loading:true,
error:null,

        }
        
   case FETCH_PRODUCT_ID_SUCCESS:
    return{
        ...state,
        loading:false,
        product:action.payload,
    };

    case FETCH_PRODUCT_ID_FAILURE:
    return{
        ...state,
        loading:false,
        error:action.payload,

    };

    default:
        return state;
}
};

export default product_IdReducer;