import React from 'react';
import './auth.styles.scss'
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component'

const Auth = () => (
    <div className='auth'>
        <SignIn />
        <SignUp />
    </div>
)

export default Auth