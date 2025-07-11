import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "../actions/wishListAction";

const intialState = {
  wishListItmes : JSON.parse(localStorage.getItem('wishList')) || [],
};

const wishlistReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST: {
      const newProduct = action.payload;
      const existingProduct = state.wishListItmes.find(
        (item) => item.id === newProduct.id
      );

      let updatedCart;
      if (existingProduct) {
        return state;
      } else {
        updatedCart = [...state.wishListItmes, { ...newProduct, quantity: 1 }];
         localStorage.setItem("wishList", JSON.stringify(updatedCart));
      }

      return {
        ...state,
        wishListItmes: updatedCart,
      };
    }
    case REMOVE_FROM_WISHLIST: {
      
      const updatedCart = state.wishListItmes.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        wishListItmes: updatedCart,
      };
    }

    default:
      return state;
  }
};

export default wishlistReducer;
