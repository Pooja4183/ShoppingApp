import {
  ADD_TO_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  REMOVE_FROM_CART,
} from '../actions/cartActions';

const intialState = {
  cartProduct: [],
  totalPrice: 0,
};

// Utility function to calculate total price
const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newProduct = action.payload;
      const existingProduct = state.cartProduct.find(
        (item) => item.id === newProduct.id
      );

      let updatedCart;
      if (existingProduct) {
        updatedCart = state.cartProduct.map((item) =>
          item.id === newProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...state.cartProduct, { ...newProduct, quantity: 1 }];
      }

      return {
        ...state,
        cartProduct: updatedCart,
        totalPrice: calculateTotalPrice(updatedCart),
      };
    }

    case INCREMENT_QUANTITY: {
      const updatedCart = state.cartProduct.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      return {
        ...state,
        cartProduct: updatedCart,
        totalPrice: calculateTotalPrice(updatedCart),
      };
    }

    case DECREMENT_QUANTITY: {
      const itemToDecrement = state.cartProduct.find(
        (item) => item.id === action.payload
      );

      let updatedCart;
      if (itemToDecrement.quantity === 1) {
        updatedCart = state.cartProduct.filter(
          (item) => item.id !== action.payload
        );
      } else {
        updatedCart = state.cartProduct.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }

      return {
        ...state,
        cartProduct: updatedCart,
        totalPrice: calculateTotalPrice(updatedCart),
      };
    }

    case REMOVE_FROM_CART: {
      const updatedCart = state.cartProduct.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        cartProduct: updatedCart,
        totalPrice: calculateTotalPrice(updatedCart),
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
