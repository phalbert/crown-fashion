import { createSelector } from 'reselect'

//first arg, is an array of input selectors
//second arg, func that returns the value we want out of input selector
// cart arg in second arg, is each value of selectCart
//createSelector creates a memoized selector

// input selector
const selectCart = state => state.cart

//memoized selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

//memoized selector
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
    )
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + (cartItem.quantity * cartItem.price), 0)
)