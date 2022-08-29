import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/configureStore'
import Greeting from './Greetings'

const App = () => {
  return (
    <Provider store={store}>
      <div className='w-[80%] mx-auto my-4'>
      <h1 className="text-4xl">Refresh to Get new Greetings</h1>
        <Greeting />
      </div>
    </Provider>
  )
}

export default App