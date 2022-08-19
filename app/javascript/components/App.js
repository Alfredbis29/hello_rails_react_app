import React from 'react'
import Greetings from './Greetings'
import { Provider } from 'react-redux'
import  store from './redux/configureStore'


const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello world</h1>
      <Greetings />
    </div>
    </Provider>
  )
}

export default App