import React,{Component} from 'react';
import {connect} from 'react-redux';
import {carDetail} from '../actions';
import {bindActionCreators} from 'redux';



class Car extends Component{

    componentWillMount(){
        this.props.carDetail(this.props.match.params.id);
    }
    renderDetails = ({detail}) =>{
        //console.log('inside render details ', detail);
        if(detail){
            return detail.map((item)=>{
                return(
                    <div key={item.id} className="car_details">
                        <img src={`/images/${item.image}`}/>
                        <div className="content">
                            <h2>{item.model}</h2>
                            <h4>{item.brand}</h4>
                            <p>
                                {item.description}
                            </p>
                        </div>

                    </div>
                )
            })
        }
    }
    render(){
        return(
            <div>
                
              {this.renderDetails(this.props.cars)} 
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('Inside Car Details mapstateToProps :: ', state);
    return{
        cars:state.cars
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({carDetail}, dispatch)
}



export default connect(mapStateToProps,mapDispatchToProps)(Car);