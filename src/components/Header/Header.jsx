import block from 'bem-cn'
import React from 'react'
import { Navigation } from '../Navigation/Navigation'
import './Header.css'

const b = block('header')

export const Header = () => (
  <header className={b()}>
    <div className="menu-container">
      <img src="/images/logo.svg" className={b('logo')} alt=""/>
      <Navigation/>
    </div>
  </header>
)
