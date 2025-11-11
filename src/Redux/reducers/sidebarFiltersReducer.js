import { defaults } from "autoprefixer";
import { SIDEBAR_FILTERS_REQUEST,SIDEBAR_FILTERS_SUCCESS,SIDEBAR_FILTERS_FAILURE } from "../actions/types";

const initialState = {
    filtersList:[],
    loading:false,
    error:null,
}

const sidebarFiltersReducer = (state=initialState, action) =>{
switch (action.type){
    case SIDEBAR_FILTERS_REQUEST:
        return{
            ...state,
            loading:true,
            error:null,
        }
 case SIDEBAR_FILTERS_SUCCESS:
    return{
        ...state,
       loading:false,
       error:null,
      filtersList:action.payload,
    }

    case SIDEBAR_FILTERS_FAILURE:
    return{
        ...state,
       loading:false,
       error:action.payload,
       filtersList:[],
    }

    default:
      return state;
}
}

export default sidebarFiltersReducer;