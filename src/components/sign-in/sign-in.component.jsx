import { Component } from 'react';
import FormInput from 'components/form-input/form-input.component';
import CustomButton from 'components/custom-button/custom-button.component';
import { auth, signInWithGoogle } from 'firebase/firebase.utils';
import './sign-in.styles.scss';
import { toast } from 'react-toastify';

export default class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isLoading: false,
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      this.setState({ isLoading: true });
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      toast.error(error.message, { position: 'top-center' });
    } finally {
      this.setState({ email: '', password: '', isLoading: false });
    }
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            label='email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            name='password'
            label='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className='buttons'>
            <CustomButton type='submit' isLoading={this.state.isLoading}>
              Sign in
            </CustomButton>
            <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
