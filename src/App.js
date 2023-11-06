import React from 'react'
import Counterapp from './Counterapp'
import './App.css'
import Store from './Store'
import {Provider} from 'react-redux'
const App = () => {
  return (
    <Provider store={Store}>
    <div><Counterapp /></div>
    </Provider>
  )
}

export default App
