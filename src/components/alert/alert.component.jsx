import React from 'react'

import './alert.styles.scss'

const Alert = ({ intent, message }) => (
    <div className='alert-area'>
        {message}
    </div>
)

export default Alert