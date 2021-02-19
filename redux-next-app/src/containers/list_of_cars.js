import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class ListOfCars extends Component{

    constructor(props){
        super(props)
        console.log('Inside constructor ', this.props);
    }
    listOfCars=({list}) =>{
        if(list){
            return (list.map((car)=>{
                return(
                    <Link key={car.id} to={`/car/${car.id}`} className="car_item">
                        <div className="left">
                            <img src={`/images/${car.image}`}/>
                        </div>
                        <div className="right">
                            <h3>{car.model}</h3>
                            <h5>{car.brand}</h5>
                        </div>
                            
                    </Link>
                )
            }))
        }
    }
    render(){
        return (
            <div>
                {this.listOfCars(this.props.cars)}
            </div>
        )
    }
}

function mapStateToProps(state){
   return{cars:state.cars};
}

export default connect(mapStateToProps,null)(ListOfCars);