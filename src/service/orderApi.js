import axiosInstance from '../api/apiClient';

export const createOrderApi = async (payload)=>{
    const response = await axiosInstance.post('/order',payload);
    return response.data;
}