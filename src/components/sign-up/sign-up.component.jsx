import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { auth, createUserProfileDocument } from 'firebase/firebase.utils';

import FormInput from 'components/form-input/form-input.component';
import CustomButton from 'components/custom-button/custom-button.component';

import './sign-up.styles.scss';
import 'react-toastify/dist/ReactToastify.css';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      isLoading: false,
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      toast.warning("Passwords don't match", { position: 'top-center' });
      return;
    }

    try {
      this.setState({ isLoading: true });
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      toast.success('Account created successfully', { position: 'top-center' });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      toast.error(error.message, { position: 'top-center' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            label='Name'
            value={displayName}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='email'
            name='email'
            label='Email'
            value={email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            name='password'
            label='Password'
            value={password}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            label='Confirm password'
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />
          <CustomButton type='submit' isLoading={this.state.isLoading}>
            SIGN UP
          </CustomButton>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default SignUp;
