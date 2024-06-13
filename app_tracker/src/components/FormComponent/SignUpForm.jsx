import { Component } from 'react';
import { signUp } from '../../../utilities/users-service';

export default class SignUpForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };


  handleSubmit = async (evt) => {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      this.props.setUser(user);

    } catch {
      // An error occurred 
      this.setState({ error: 'Sign Up Failed' });
    }
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };


 render() {
  const disable = this.state.password !== this.state.confirm;
  return (
    <>
      <div>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className='flex flex-col max-w-60 m-auto'>
            <label className='text-center'>Username</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />

            <label className='text-center'>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />

            <label className='text-center'>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />

            <label className='text-center'>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />

            <div className="mx-auto pt-4">
              <button className="bg-C3 text-white py-1 px-4 rounded text-sm hover:bg-C8 mt-2 h-10 font-bold">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
      <p className="error-message">&nbsp;{this.state.error}</p>
    </>
  );
}
}