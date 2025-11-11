import {SIDEBAR_FILTERS_REQUEST,SIDEBAR_FILTERS_SUCCESS,SIDEBAR_FILTERS_FAILURE} from './types';

export const sidebarFiltersRequest = (filterList)=>({
type: SIDEBAR_FILTERS_REQUEST,
payload: filterList,   
});

export const sidebarFiltersSuccess = (result)=>({
type: SIDEBAR_FILTERS_SUCCESS,
payload: result,   
});

export const sidebarFiltersFailure = (error)=>({
type: SIDEBAR_FILTERS_FAILURE,
payload: {message:error},   
});