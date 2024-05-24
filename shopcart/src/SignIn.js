import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const responseFacebook = (response) => {
    console.log(response);
    if (response.accessToken) {
      alert('Facebook login successful!');
      navigate('/checkout');
    } else {
      alert('Facebook login failed!');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <div className="mb-4">
        <label>Name:</label>
        <input type="text" className="form-control" placeholder="Your name" />
      </div>
      <div className="mb-4">
        <label>Email:</label>
        <input type="email" className="form-control" placeholder="Your email" />
      </div>
      <button className="btn btn-success mb-3">Login</button>
      <FacebookLogin
        appId="YOUR_APP_ID" // Replace with your Facebook app ID
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        icon="fa-facebook"
        textButton=" Login with Facebook"
      />
    </div>
  );
}

export default SignIn;
