import classes from './layout.module.css';
import React, {Component} from 'react'
import Aux from '../../Hoc/hoc_Aux'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'


class layout extends Component{

    state={
        showSideDrawer: true,
    };

    SideDrawerClosedHandler = ()=>{
        this.setState({showSideDrawer:false});
    }
    render(){
        return(
        <Aux>
        <Toolbar/>
        <SideDrawer open={this.state.showSideDrawer}  closed={this.SideDrawerClosedHandler}/>
    <main className={classes.Content}>

        {this.props.children}

    </main>
    </Aux> )
    }
} 
/*Or we could have used used Div as single element is needed in return */
export default layout;