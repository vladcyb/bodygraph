import { fetchBodyData }  from 'components/body-data/actions';
import { isUserLoggedIn } from 'auth';

export function onRootEnter(nextState, replace) {
  redirectIfLoggedIn(replace);
}

export function onRegisterEnter(nextState, replace) {
  redirectIfLoggedIn(replace);
}

export function onBodyDataEnter(store) {
  return function(nextState, replace) {
    if (!isUserLoggedIn()) return replace('/');
    store.dispatch(fetchBodyData());
  }
}

function redirectIfLoggedIn(replace) {
  if(isUserLoggedIn()) return replace('/body-data')
}
