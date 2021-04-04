import React from 'react';
import Aux from '../../../Hoc/hoc_Aux'
import Button from '../../UI/Button/Button'
const orderSummary= (props)=>{
    const ingredientsSummary= Object.keys(props.ingredients)
        .map(igkey=>{
            return <li key={igkey}><span style={{textTransform: 'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}</li>
        });//span with that style will help in capitialize
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Your Delicious Burger is ready</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Amount Payable ₹{props.price}</strong></p>
            <p>Proceed to Checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType='Success' clicked={props.purchaseContinue}>Continue</Button>
        </Aux>
    )

};

export default orderSummary;