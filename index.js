function todos(state = [], action){
  if(action.type === 'ADD_TODO'){
    return state.concat([action.todo])
  }

  return state
}

function createStore(){
  let state
  let listeners = []

  const dispatch = (action) => {
    state = todos(state, action)
    listeners.forEach((listener) => listener())
  }

  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}
