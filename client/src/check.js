import React,{Component} from 'react';
import Child from './child'
class Check extends Component{
    state = {
        open:false
    }
    render(){
        const val = {name:'kishan'}
        return(
            <div>
                Main Container >>>>>>>>>>>><hr />
                <button 
                onClick={()=>this.setState({open:!this.state.open})}>
                ClickMe!</button><br />
                {this.state.open?<Child data={val}/>:'loading.....'}
            </div>
        )
    }
}

export default Check;