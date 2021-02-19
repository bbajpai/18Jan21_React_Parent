import { combineReducers} from 'redux';

import cars from './cars_reducer';
//import selctedCarDetail from './car_detail';

const rootReducer = combineReducers({
        cars,
       // selctedCarDetail
});

export default rootReducer;
