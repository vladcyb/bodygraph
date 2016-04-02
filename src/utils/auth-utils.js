import Cookie        from 'js-cookie';
import {fromJS, Map} from 'immutable';

export const isUserLoggedIn = () => !!getRawAuthCookie();

export const createSession = (data) => {
  Cookie.set('auth', btoa(JSON.stringify(data)), {expires: 7});
};

export const destroySession = () => Cookie.remove('auth');

export const getAuthData = () => {
  try {
    return fromJS(JSON.parse(atob(getRawAuthCookie())));
  } catch (e) {
    return Map();
  }
}

export const requireAuth = (nextState, replace) => {
  if(!isUserLoggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

export const redirectIfLoggedIn = (nextState, replace) => {
  if(isUserLoggedIn()) {
    replace({
      pathname: '/body-data',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}
export const getId = () => {
  const parsedCookie = JSON.parse(atob(getRawAuthCookie()));
  return parsedCookie.auth.uid;
};

const getRawAuthCookie = () => Cookie.get('auth');
