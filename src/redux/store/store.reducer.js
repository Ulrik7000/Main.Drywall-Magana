import store_DATA from '../../views/Ecommerce/pages/store/store.data';

const INITIAL_STATE = {
  collections: store_DATA
};

const storeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
    return state;
  }
};

export default storeReducer;
