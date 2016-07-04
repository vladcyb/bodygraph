import Cookie          from 'js-cookie';
import { fromJS, Map } from 'immutable';

export function isUserLoggedIn() {
  return !!getRawAuthCookie();
}

export function getAuthData() {
  try {
    return fromJS(JSON.parse(atob(getRawAuthCookie())));
  } catch (e) {
    return Map();
  }
}

export function createSession(data) {
  Cookie.set('auth', btoa(JSON.stringify(data)), {expires: 7});
};

export function destroySession() {
  Cookie.remove('auth');
}

function getRawAuthCookie() {
  return Cookie.get('auth');
}
