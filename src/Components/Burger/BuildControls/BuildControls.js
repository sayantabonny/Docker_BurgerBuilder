import React from 'react';
import classes from './BuildControls.module.css'
import BuildControlElement from './BuildControlElement'

const controls=
[
    {label: 'Salad', type:'salad'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'},
]
const buildControls = (props) => (
    <div className={classes.BuildControls}>
    <p> Current Price ₹<b>{props.price}</b></p>
         {
            controls.map(ctrl=>(
                <BuildControlElement 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingridientAdded(ctrl.type)}
                deleted={() => props.ingridientDeleted(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                disabled_add={props.disabled_add[[ctrl.type]]}/>
            ))
         }
         <button className={classes.OrderButton} disabled={props.purchasable} onClick={props.ordered}>ORDER Now</button>
    </div>
);

export default buildControls;