export default store => next => action => {
  const result = next(action);
  if (process.env.NODE_ENV !== 'production' && typeof action !== 'function') {
    console.group(action.type);
    console.info('dispatching', action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
  }
  return result
}
