
import {jwtDecode} from 'jwt-decode';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";

let token = localStorage.getItem('token');
let user = null;
let isAuthenticated = false;
let userEmail = localStorage.getItem('userEmail')

if(token){
  try{
    const decoded = jwtDecode(token);
    const currentTime = Date.now()/1000;

    if(decoded.exp > currentTime){
      user = {
        id:decoded.id,
        name:decoded.name,
        email:decoded.email
      };
      isAuthenticated = true;

    }else{
localStorage.removeItem('token');
    }

  }catch(error){
console.log("invalid token");
  }
}

const intialState = {
  user,
  loading: false,
  error: null,
  token,
  isAuthenticated,
  userEmail,
};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { ...state, loading: true, error: null };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        isAuthenticated: false,
        userEmail:action.payload.user.email
      };
    case SIGNUP_FAIL:
      return { ...state, loading: false, error: action.payload };

    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        isAuthenticated: true,
        token:action.payload.token,
      
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
      };


    case LOGOUT:
        return {...state,isAuthenticated:false,loading:false,user:null,token:null,error:null}

    default:
      return state;
  }
};

export default authReducer;
