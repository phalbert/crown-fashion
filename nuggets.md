

## Redux thunk

A middleware that intercepts all function actions and adds the `dispatch` parameter which can then be used to dispatch action objects to the reducer from within an asynchronous function e.g.

```javascript
// an object action: ignored by thunk
export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

// a function action: thunk passes the dispatch parameter to it
export const fetchCollectionsAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections')
        //dispatch used to call object actions in the root reducer
        dispatch(fetchCollectionsStart())

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            dispatch(fetchCollectionsSuccess(collectionsMap))
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}
```