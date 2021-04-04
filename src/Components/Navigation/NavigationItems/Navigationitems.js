import React from 'react';
import classes from "./Navigationitems.module.css";
import NavigationElement from "./NavigationElement"

const navigationItems=()=>(

    <ul className={classes.NavigationItems}>
         <NavigationElement link='/' active >Burger Builder</NavigationElement>
         <NavigationElement link='/'>Checkout</NavigationElement>
    
    </ul>
)

export default navigationItems;