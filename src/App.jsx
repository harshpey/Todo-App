import React from 'react'
import Login from './features/Login'
import Signup from './features/Signup'
import Header from './components/Header'
import ListManager from './pages/ListManager'
import CreateToDoModal from './modals/CreateToDoModal'

const App = () => {
  return (
    <div>
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Header/> */}
      {/* <ListManager/> */}
      <CreateToDoModal/>
    </div>
  )
}

export default App
