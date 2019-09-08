function createStore(){
  let state
  let listeners = []

  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  }

  return {
    getState
  }
}

const store = createStore()
store.subscribe(() => {
  console.log('The new state is: ', store.getState())
})

store.subscribe(() => {
  console.log('The store changed.')
})
