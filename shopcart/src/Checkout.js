import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { useNavigate } from 'react-router-dom';

function Checkout() {
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
      <FacebookLogin
        appId="YOUR_APP_ID" // Replace with your Facebook app ID
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        icon="fa-facebook"
      />
    </div>
  );
}

export default Checkout;
