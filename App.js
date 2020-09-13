import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from './Pages/Common/store'
import Router from './Pages/Router'
import { PersistGate } from 'redux-persist/integration/react'

export {store} 

class App extends Component {
  render(){
    return(
      <Provider store= {store}>
        <PersistGate persistor= {persistor}>
          <Router/>
        </PersistGate>
      </Provider>
    ) 
  }
}

export default App