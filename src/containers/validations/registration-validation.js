import {isValidEmail} from '../../utils';

export default (values) => {
  const errors = {}
  const {email, password, passwordConfirmation} = values;

  if (!email) errors.email = 'We need an email address';
  else if (!isValidEmail(email))
    errors.email = 'Must be a valid email address';

  if (!password) errors.password = 'Need a password';
  else if (password.length < 6)
    errors.password = 'Email must be more than 6 characters';

  if (!passwordConfirmation) errors.passwordConfirmation = 'Confirm password';
  else if (password !== passwordConfirmation)
    errors.passwordConfirmation = 'Passwords must match';

  return errors;
}
