import React,{Component} from 'react';
import ListOfCars from '../containers/list_of_cars';
import Search from '../containers/search';



class App extends Component{
    render(){
        return(
            <div className="App">
                <Search></Search>
                <ListOfCars></ListOfCars>
            </div>
        )
    }
}



export default App;