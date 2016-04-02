import './index.scss';
import React from 'react';
import LoginOrSignup from '../login-or-signup';

export default () => {
  return <main>
    <section className="app-container">
      <header>
        <h1>BodyGraph</h1>
      </header>
      <LoginOrSignup />
    </section>
  </main>
}
