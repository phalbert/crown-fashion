import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'

const Cart = () => (
    <div className='cart-dropdown'>
        <div className='shopping-icon' />
        <CustomButton className='cart-items'>GO TO CHECKOUT</CustomButton>
    </div>
)

export default Cart