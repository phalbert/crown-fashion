import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import './checkout.styles.scss'

const Checkout = ({ cartItems, totalValue }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        }
        <div className='total'>
            TOTAL=${totalValue}
        </div>
        <div className='test-warning'>
            *Use the following test card
            <br /> CARD: 4242 4242 4242 4242
            <br /> EXP: 01/20
            <br /> CVV: 123
        </div>
        <StripeCheckoutButton price={totalValue} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalValue: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)