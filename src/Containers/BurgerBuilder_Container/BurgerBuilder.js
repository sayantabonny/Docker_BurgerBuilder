import React, { Component } from 'react';
import Aux from "../../Hoc/hoc_Aux";
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'

const INGRIDIENT_PRICES={
    salad:10,
    cheese:10,
    meat: 50,
}


class BurgerBuilder extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={...}
    // }
    //two ways to define state
    
    state = {
        ingredients:
        {
            cheese:0,
            meat:0,
            salad:0,
        },
        totalPrice: 100,
        purchasable:false,
        checkout: false,
    }


    checkoutHandler= ()=>{
        this.setState({checkout:true})
    }
    CheckOutCancel= ()=>{
        this.setState({checkout:false})
    }

    updatePurchase()
    {
        for(let keys in this.state.ingredients)
        {
            if(this.state.ingredients[keys]>0)
            {
                return true;
            }
        }
        return false;
    }

    checkOutContinue = () =>{
        alert('Proceeding to checkout')
    }

    addIngredientHandler =(type) => {
        const oldCount= this.state.ingredients[type];
        let updatedCounted=oldCount+1;
        const updatedIngridients={
            ...this.state.ingredients
        };
        updatedIngridients[type]=updatedCounted;
        const priceAddition=INGRIDIENT_PRICES[type];
        const oldPrice= this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngridients,purchasable: true})
    }
    removeIngredientHandler =(type) => {
        const oldCount= this.state.ingredients[type];
        let updatedCounted=oldCount-1;
        const updatedIngridients={
            ...this.state.ingredients
        };
        updatedIngridients[type]=updatedCounted;
        const priceAddition=INGRIDIENT_PRICES[type];
        const oldPrice= this.state.totalPrice;
        const newPrice=oldPrice-priceAddition;
        let purchaseVal=this.updatePurchase();
        this.setState({totalPrice: newPrice, ingredients: updatedIngridients, purchasable: purchaseVal})
        
    }


    render (){

        const disabledInfo={
            ...this.state.ingredients
        };

        const addRestriction={
            ...this.state.ingredients
        };

        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0; //If 0 then true.. replacing all zeros as true boolean
        }
        //salad:true, meat:false

        for(let key in addRestriction){
            addRestriction[key]=addRestriction[key]>2;//If 0 then true.. replacing all zeros as true boolean
        }

        return (
            <Aux>
                <Modal show={this.state.checkout} modalClosed={this.CheckOutCancel}>
                    <OrderSummary ingredients={this.state.ingredients}
                    purchaseCancelled={this.CheckOutCancel}
                    purchaseContinue={this.checkOutContinue}
                    price={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingridientAdded={this.addIngredientHandler}
                    ingridientDeleted={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    disabled_add={addRestriction}
                    price={this.state.totalPrice}
                    purchasable={!this.state.purchasable}
                    ordered={this.checkoutHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;