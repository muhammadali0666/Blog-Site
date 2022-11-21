import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Signup } from '../../Pages/Signup/signup'
import {All} from  "../../Pages/All/all"
import {Global} from  "../../Pages/GlobalTeory/global"

export const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/all' element={<All/>}/>
        <Route path='/global' element={<Global/>}/>
      </Routes>
    </>
  )
}
