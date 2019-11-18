import React from 'react';
import './signup.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import notify from '../alert/alert.component'

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            message: ''
        }
    }

    handleSubmit = async(event) => {
        event.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            notify({ intent: 'warn', message: 'passwords dont match' })
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName })
        }
        catch(error){
            console.log(error);
            notify({ intent: 'error', message: error.message })
        }
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            
            <div className='sign-up'>

                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        label='Full Name'
                        required
                    />
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp