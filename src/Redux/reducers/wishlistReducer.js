import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "../actions/wishListAction";

const intialState = {
  wishListItmes: [],
};

const wishlistReducer = (state = intialState, action) => {
  switch (action.type) {
    // add item to wishlist
    case ADD_TO_WISHLIST: {
      const newProduct = action.payload;

  // Check if product already exists in wishlist
      const existingProduct = state.wishListItmes.find(
        (item) => item._id === newProduct._id
      );

      if (existingProduct) {
        return state; // no duplicate
      };
      // } else {
      //   updatedCart = [...state.wishListItmes, { ...newProduct, quantity: 1 }];
      //   localStorage.setItem("wishList", JSON.stringify(updatedCart));
      // }

      return {
        ...state,
        wishListItmes: [...state.wishListItmes, newProduct],
      };
    }
// Remove itme from wishlist
    case REMOVE_FROM_WISHLIST: {
      return {
        ...state,
        wishListItmes:state.wishListItmes.filter(
        (item) => item._id !== action.payload
      ),
      };
    }

    default:
      return state;
  }
};

export default wishlistReducer;
