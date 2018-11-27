import React,{Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import getUsers from '../actions/index';

class HomeContainer extends Component{

    componentWillMount(){
        this.props.getUsers();
    }

    renderItems = (users) =>(
        //console.log(users)
        users.list?users.list.map(user=>(
            'item'
        )):null
    )
            
    

    render(){
        console.log(this.props.users);
        return(
            <div>
                Home Items
                {this.renderItems(this.props.users)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state.userReducer.list);
    return {
        users: state.userReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getUsers
    }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);