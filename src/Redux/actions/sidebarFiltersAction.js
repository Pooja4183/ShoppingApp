import {SIDEBAR_FILTERS_REQUEST,SIDEBAR_FILTERS_SUCCESS,SIDEBAR_FILTERS_FAILURE} from './types';

export const sidebarFiltersRequest = (categoryName)=>({
type: SIDEBAR_FILTERS_REQUEST,
payload:{categoryName} ,   
});

export const sidebarFiltersSuccess = (data)=>({
type: SIDEBAR_FILTERS_SUCCESS,
payload: data,   
});

export const sidebarFiltersFailure = (error)=>({
type: SIDEBAR_FILTERS_FAILURE,
payload: {message:error},   
});