import { createSelector } from 'reselect'

// input selector
const selectCart = state => state.cart

//memoized selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

//memoized selector
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
    )
)