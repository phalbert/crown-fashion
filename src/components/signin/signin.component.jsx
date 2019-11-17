import React from 'react';
import './signin.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            message: ''
        }
    }

    handleSubmit = async(event) => {
        event.preventDefault()
        const { email, password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            alert('signed in')
        } catch (error) {
            alert(error.message)
        }
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }


    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        label='Password'
                        required
                    />
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In With Google
                        </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn