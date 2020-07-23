import {
  SET_SALES,
  SET_IS_SALES_LOADED,
  SET_IS_SALES_LOADING,
  ADD_NEW_ORDER,
  REMOVE_ORDER,
  EDIT_ORDER,
} from './constants';

const initialState = {
  isSalesLoaded: false,
  isSalesLoading: false,
  sales: [],
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SALES:
      return {
        ...state,
        sales: action.payload,
      };
    case SET_IS_SALES_LOADED:
      return {
        ...state,
        isSalesLoaded: action.payload,
      };
    case SET_IS_SALES_LOADING:
      return {
        ...state,
        isSalesLoading: action.payload,
      };
    case ADD_NEW_ORDER:
      return {
        ...state,
        sales: [
          ...state.sales,
          action.payload,
        ],
      };
    case REMOVE_ORDER:
      return {
        ...state,
        sales: state.sales.filter(item => item.id !== action.payload),
      };
    case EDIT_ORDER:
      const { order } = action.payload;
      console.log(action.payload.order);
      console.log(state.sales);

      return {
        ...state,
        sales: [
          ...state.sales.slice(0, order.id),
          order,
          ...state.sales.slice(Number(order.id) + 1),
          // ...state.sales.filter(item => item.id > order.id),
        ],
      };
    default:
      return state;
  }
};
