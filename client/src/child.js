import React,{Component} from 'react';

class Child extends Component{
    /* constructor(props){
        super(props)
    } */
    state = {
        value:''
    }
    componentWillMount(){
        console.log('from componentWillMount')
        this.setState({value:'kammo'})
    }
    componentDidMount(){
        console.log('from componentDidMount')
    }

    componentWillUpdate(){
        console.log('from componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('from componentDidUpdate')
    }
    render(){
        console.log(this.props)
        return(
            <div>
                I'm child comp.
            </div>
        )
    }
}

export default Child;