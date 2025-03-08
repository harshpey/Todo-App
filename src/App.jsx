import React from 'react'
import Login from './features/Login'
import Signup from './features/Signup'
import Header from './components/Header'
import ListManager from './pages/ListManager'
import CreateToDoModal from './components/CreateToDoModal'
import EditTodoModal from './components/EditTodoModal'
import SortToDoModal from './components/SortToDoModal'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/header" element={<Header/>}/>
        <Route path="/listmanager" element={<ListManager/>}/>
      </Routes>
       {/* <Login/> */}
       {/* <Signup/> */}
       {/* <Header/> */}
       {/* <ListManager/> */}
       {/* <CreateToDoModal/> */}
       {/* <EditTodoModal/> */}
       {/* <SortToDoModal/> */}
    </>
  )
}

export default App
