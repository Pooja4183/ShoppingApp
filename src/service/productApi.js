import axiosInstance from "../api/apiClient";

// upload product (post)

export const uploadProductApi = async (FormData)=>{
    const response = await axiosInstance.post('/products', FormData,{
        headers:{
            "Content-Type":"multipart/form-data", // for file uploads
        },
    });
    return response.data;   
}