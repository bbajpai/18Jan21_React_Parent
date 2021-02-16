import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getCars} from '../actions';
import {bindActionCreators} from 'redux';



class Search extends Component{
   
    constructor(props){
        super(props);

        this.state = {
            keyword:''
        }
    }

    handleChange = (event)=>{
        this.setState({
            keyword:event.target.value
        })
    }

    searchCar = (event)=>{
        event.preventDefault();
        console.log('inside search car   ::: ', this.state);
        this.props.getCars(this.state.keyword)
    }

    componentDidMount(){
        console.log(this.state);
    }
    render(){

        return(
            <div>
                <div className="main_search">
                    <form onSubmit={this.searchCar}>
                        <input type="text" onChange={this.handleChange}/>
                       
                    </form>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getCars},dispatch)
}

export default connect(null,mapDispatchToProps)(Search);