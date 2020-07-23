import {
  SET_SALES,
  SET_IS_SALES_LOADED,
  SET_IS_SALES_LOADING,
  ADD_NEW_ORDER,
  REMOVE_ORDER,
  EDIT_ORDER,
} from './constants';

import salesData from '../api/salesTestData.json';

export const setSalesCreator = sales => ({
  type: SET_SALES,
  payload: sales,
});

export const startSalesLoadingCreator = () => ({
  type: SET_IS_SALES_LOADING,
  payload: true,
});

export const stopSalesLoadingCreator = () => ({
  type: SET_IS_SALES_LOADING,
  payload: false,
});

export const setSalesLoadedCreator = () => ({
  type: SET_IS_SALES_LOADED,
  payload: true,
});

export const addNewOrderCreator = order => ({
  type: ADD_NEW_ORDER,
  payload: order,
});

export const removeOrderCreator = id => ({
  type: REMOVE_ORDER,
  payload: id,
});

export const editOrderCreator = order => ({
  type: EDIT_ORDER,
  payload: {
    order,
  },
});

export const handleLoadSales = () => {
  return (dispatch) => {
    dispatch(startSalesLoadingCreator());
    dispatch(setSalesCreator(salesData));
    dispatch(setSalesLoadedCreator());
    dispatch(stopSalesLoadingCreator());
  };
};
