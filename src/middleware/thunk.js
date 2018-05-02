
const customMiddleware = store => next => action => {
  //console.info('IN THUNK: ', action)
    return isFunction(action) ? action(store.dispatch, store.getState): next(action);
}

// isFunction(action) ? action(store.dispatch, store.getState): next(action) = customMiddleware(store)(next)(action)
const isFunction = (action) => {
    return typeof action === 'function';
}

export default customMiddleware;

/**
 * Logs all actions and states after they are dispatched.
 */
export const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
  }
  
  /**
   * Sends crash reports as state is updated and listeners are notified.
   */
  export const crashReporter = store => next => action => {
    try {
      return next(action)
    } catch (err) {
      console.error('Caught an exception!', err)
      Raven.captureException(err, {
        extra: {
          action,
          state: store.getState()
        }
      })
      throw err
    }
  }
