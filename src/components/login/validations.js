import { isValidEmail } from 'email';

export default function({email, password}) {
  const errors = {};

  if (!email) errors.email = 'We need an email address';
  else if (!isValidEmail(email)) errors.email = 'Must be a valid email address';

  if (!password) errors.password = 'Need a password';
  else if (password.length < 6) errors.password = 'Email must be more than 6 characters';

  return errors;
}
