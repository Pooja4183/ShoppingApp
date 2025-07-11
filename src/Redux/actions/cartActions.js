// Cart Action 

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
export const DECREMENT_QUANTITY ="DECREMENT_QUANTITY";

// Cart action creator

export const addToCart=(product)=>({
    type: ADD_TO_CART,
    payload:product
});

export const removeFromCart = (productID)=>({
    type: REMOVE_FROM_CART,
    payload:productID
});

export const incrementQuantity = (productID)=>({
    type:INCREMENT_QUANTITY,
      payload:productID
});

export const decrementQuantity=(productID)=>({
    type:DECREMENT_QUANTITY,
      payload:productID
});