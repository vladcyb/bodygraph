import './index.scss';
import React from 'react';
import {
  TextField,
  RaisedButton,
  Divider
}  from 'material-ui';

const LoginForm = (p) => {
  const {
    fields: {email, password},
    handleSubmit,
    submitting
  } = p;
  return <section className="m-login">
    <form onSubmit={handleSubmit}>
      <div className="m-login--fields" style={{backgroundColor: 'white'}}>
        <TextField
          hintText="Email Address"
          type="email"
          errorText={email.touched && email.error}
          style={{display: 'block'}}
          underlineStyle={{bottom: 0, borderBottom: 'none'}}
          hintStyle={{left: 80}}
          {...email}
        />
        <Divider />
        <TextField
          hintText="Password"
          type="password"
          errorText={password.touched && password.error}
          style={{display: 'block'}}
          underlineStyle={{bottom: 0, borderBottom: 'none'}}
          hintStyle={{left: 95}}
          {...password}
        />
      </div>
      <div className="m-login--button-container" style={{marginTop: 50}}>
        <RaisedButton
          primary={true}
          disabled={submitting}
          label="LOGIN"
          onClick={handleSubmit}
        />
      </div>
    </form>
  </section>
}

export default LoginForm;
