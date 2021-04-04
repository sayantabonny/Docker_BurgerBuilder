import React from 'react';
import classes from './Burger.module.css';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient';

const burger = (Burger_props) => {
    console.log("Inside Burger JS");
    console.log("Object.keys(Burger_props.ingredients)");
    console.log(Object.keys(Burger_props.ingredients));
    let Received_Ingridents = Object.keys(Burger_props.ingredients).map(igkey=>{
        console.log(igkey);
        console.log([...Array(Burger_props.ingredients[igkey])]);
        return [...Array(Burger_props.ingredients[igkey])].map((_,i)=>
        {
            return <BurgerIngridient key= {igkey+i} type={igkey} />
        });
    }); //Array of keys
    console.log(Received_Ingridents);
    Received_Ingridents=Received_Ingridents.reduce((arr,el) => {
        return arr.concat(el);
    },[]);
    console.log(Received_Ingridents);

    if(Received_Ingridents.length===0)
    {
        Received_Ingridents=<p>Please start adding elements</p>
    }
    else
    {
        for(let i=1;i<Received_Ingridents.length;i++)
        {
            console.log(Received_Ingridents[i].props['type']);

            if(Received_Ingridents[i].props['type']==="salad")
            {
              //  console.log("hi");
                let temp=Received_Ingridents[i];
                Received_Ingridents[i]=Received_Ingridents[0];
                Received_Ingridents[0]=temp;
            }
        }
        for(let i=0;i<Received_Ingridents.length;i++)
        {
            console.log(Received_Ingridents[i].props['type']);
        }
    }
    console.log("End");
    return (
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top"/>
            {/* <BurgerIngridient type="cheese"/>
            <BurgerIngridient type="meat"/> */}
            {Received_Ingridents}
            <BurgerIngridient type="salad"/>
            <BurgerIngridient type="bread-bottom"/>
        </div>
    );
};

export default burger;