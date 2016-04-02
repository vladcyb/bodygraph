import       './index.scss';
import React from 'react';
import {
  TextField,
  RaisedButton,
  Divider
} from 'material-ui';

const RegistrationForm = (p) => {
  const {
    fields: {email, password, passwordConfirmation},
    handleSubmit,
    submitting
  } = p;
  return <main>
    <div className="app-container">
      <section className="m-register">
        <form onSubmit={handleSubmit}>
          <div style={{backgroundColor: 'white'}}>
            <TextField
              hintText="Enter Email"
              errorText={email.touched && email.error}
              style={{display: 'block'}}
              underlineStyle={{bottom: 0, borderBottom: 'none'}}
              hintStyle={{left: 90}}
              {...email}
            />
            <Divider />
            <TextField
              hintText="Enter Password"
              type="password"
              errorText={password.touched && password.error}
              style={{display: 'block'}}
              underlineStyle={{bottom: 0, borderBottom: 'none'}}
              hintStyle={{left: 70}}
              {...password}
            />
            <Divider />
            <TextField
              hintText="Confirm Password"
              type="password"
              errorText={passwordConfirmation.touched && passwordConfirmation.error}
              style={{display: 'block'}}
              underlineStyle={{bottom: 0, borderBottom: 'none'}}
              hintStyle={{left: 63}}
              {...passwordConfirmation}
            />
          </div>
          <div style={{marginTop: 50}}>
            <RaisedButton
              primary={true}
              disabled={submitting}
              label="Create Account"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </section>
    </div>
  </main>
}

export default RegistrationForm;
