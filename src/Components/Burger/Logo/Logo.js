import React from 'react'
import BurgerImage from '../../../Asset/Images/burger-logo.png'
import classes from './Logo.module.css'

const logo=(props)=>(

    <div className={classes.Logo}>
        <img src={BurgerImage} alt='My Burger'/>
    </div>
);

export default logo;