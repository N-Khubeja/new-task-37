import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TodosPage from '../pages/TodosPage'
import TodoPage from '../pages/TodoPage'
import HomePage from '../pages/HomePage'

const AppRoutes:React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/todos' element={<TodosPage/>}/>
        <Route path='/todos/:id' element={<TodoPage/>}/>
    </Routes>
  )
}

export default AppRoutes