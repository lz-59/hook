import React from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { Login, Reg, Home } from './assembly'

const routes = [
  {
    path: '/reg',
    component: Reg,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/',
    component: Login,
  },
]


export default function Routers () {
    return (
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    )
}
