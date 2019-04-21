import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authUser } from '../redux/actions/index'
export default function (ComposedClass,reload) {
    class AuthCheck extends Component {

        state = {
            loading: true
        }

        componentWillMount() {
            this.props.dispatch(authUser());
        }
        componentWillReceiveProps(nextprops){
            this.setState({loading:false})
            //console.log("nextprops>>>>>>>>>>>>",nextprops)
            const auth =nextprops.user&&nextprops.user.authUser&&nextprops.user.authUser.isAuth
            ?nextprops.user.authUser.isAuth
            :false
            if(!auth){
                //console.log("inside componentWillReceiveProps")
                if(reload){
                this.props.history.push('/login')
                }
            }
            else{
                if(reload===false){
                    this.props.history.push('/dashboard')
                }  
            }
        }

        render() {
            //console.log("this props",this.props)
            if (this.state.loading) {
                return <div>
                    Loading.....
                </div>
            }
            return (
                <ComposedClass {...this.props} />
            )
        }
    }
    const mapStateToProps = (state) => {
        return {
            user: state
        };
    };

    return connect(mapStateToProps, null)(AuthCheck);

}