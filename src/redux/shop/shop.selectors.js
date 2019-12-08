import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionRoute => createSelector(
    [selectShopCollections],
    collections => collections ? collections[collectionRoute] : null
)

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(
        key => collections[key]
    ) : []
)

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching 
)

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    // coerce collections to a boolean hence if null, it will be false
    // since null is falsey otherwise it will be true
    shop => !!shop.collections 
)