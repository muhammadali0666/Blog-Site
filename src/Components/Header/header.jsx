import React from 'react'
import { HeaderBtn } from '../Button/button'
import { Logo } from '../Logo/logo'
import "./header.css"

export const Header = () => {
  return (
    <header>
      <div className="container header">
        <Logo/>
        <ul className="header-list d-flex align-item-center me-auto ms-auto">
          <li className="header-item">
            All
          </li>
          <li className="header-item">
          Design Theory
          </li>
          <li className="header-item">
            UX
          </li>
          <li className="header-item">
            UI
          </li>
          <li className="header-item">
          Typography
          </li>
        </ul>
        <HeaderBtn/>
      </div>
    </header>
  )
}
