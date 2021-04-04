import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Burger/Logo/Logo'
import Navigation from '../NavigationItems/Navigationitems'
const toolbar= (props)=>(
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <div>Tuhin's</div>
        <div>Burger</div>
        <nav className={classes.DesktopOnly}>
           <Navigation/>
        </nav>
    </header>
);

export default toolbar;