// Cart Action 

export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";


// Cart action creator

export const addToWishlist =(WishListProduct)=>({
    type: ADD_TO_WISHLIST,
    payload:WishListProduct
});

export const removeWishlist = (WishListRemoveProduct)=>({
    type: REMOVE_FROM_WISHLIST,
    payload:WishListRemoveProduct
});

