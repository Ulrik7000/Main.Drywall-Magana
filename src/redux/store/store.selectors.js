import { createSelector } from 'reselect';

import memoize from 'lodash.memoize';

const selectstore = state => state.store;

export const selectCollections = createSelector(
  [selectstore],
  store => store.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

// export const selectCollection = collectionUrlParam =>
//   createSelector([selectCollections], collections => {
//     return collections.find(collection => {
//       return collection.routeName === collectionUrlParam
//     })
//   });

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );
