import React              from 'react';
import LoginFormContainer from '../../containers/login-container';
import { Link }           from 'react-router'

export default () => {
  return <div className="m-login-or-signup">
    <LoginFormContainer />
    <div>
      <span>No account yet? <a href="/register" style={{textDecoration: 'underline', color: 'blue'}}>Create one</a></span>
    </div>
  </div>
}
