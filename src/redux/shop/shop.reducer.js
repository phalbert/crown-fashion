import SHOP_DATA from '../../pages/shop/shop.data'

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.Type) {
        default:
            return state;
    }
}

export default shopReducer