import './index.scss';
import React    from 'react';
import { Link } from 'react-router';
import Login    from 'components/login'

export default function() {
  return <main>
    <section className="app-container">
      <header>
        <h1>BodyGraph</h1>
      </header>
      <div className="m-login-or-signup">
        <Login/>
        <div>
          <span>No account yet? </span>
          <Link to="/register" class="btn-register">Create One</Link>
        </div>
      </div>
    </section>
  </main>
}
