import React from 'react';
import Logo from '../../Burger/Logo/Logo'
import Navigation from '../NavigationItems/Navigationitems'
import classes from "./SideDrawer.module.css"
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../Hoc/hoc_Aux'

const sideDrawer=(props)=>{

    let attachedClassed=[classes.SideDrawer,classes.Closed]
    if(props.open){
        attachedClassed=[classes.SideDrawer,classes.Open]
    }
    return(

        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClassed.join(' ')}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <Navigation/>
            </nav>


        </div>
        </Aux>
    )

}
export default sideDrawer;