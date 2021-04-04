import React from 'react';
import classes from './BuildControlElement.module.css'

const buildcontrolement = (props) =>(
        <div className={classes.BuildControl}>
            <div className={classes.Label} >{props.label}</div>
            <button className={classes.Less} onClick={props.deleted} disabled={props.disabled}>Delete</button>
            <button className={classes.More} onClick={props.added} disabled={props.disabled_add}>Add</button>
        </div>
);


export default buildcontrolement;