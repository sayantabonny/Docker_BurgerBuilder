import React from 'react';
import classes from './Modal.module.css'
import Aux from '../../../Hoc/hoc_Aux'
import Backdrop from '../Backdrop/Backdrop'
const modal= (props)=>(

    <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div className={classes.Modal} style={{transform: props.show?'translate(0' : 'translateY(-100vh', opacity: props.show? '1' : '0'}}>
    {props.children}
    </div>
    </Aux>
    
);

export default modal;