import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import notify from '../alert/alert.component'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_52eXbTGC5AT6aZ1iugfR8MF8'

    const onToken = token => {
        console.log(token)
        notify({ intent: 'success', message: 'Payment successful' })
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='Crown Fashion'
        billingAddress
        shippingAddress
        image='http://svgshare.com/i/CUz.svg'
        description={`Your total price is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton