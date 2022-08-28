import {useSelector ,useDispatch} from 'react-redux'
import React from 'react';
import {increaseCounter ,decreaseCounter } from '../../redux/counterSlice'

function Counter(){

    /// access global state
    const counter = useSelector(state =>(state).counterReducer.counter)
    const dispatch = useDispatch();
    const increase = () => {
        dispatch(increaseCounter(1)) 
    };

    const decrease = () => {  
        dispatch(decreaseCounter(1))    
        
    };
    

return(
    <div>
    <div><h2 className='header '>Counter</h2></div>

    <div className="container text-center  mt-5   ">
         
        <h2 >{counter}</h2>
        <button type="button" onClick={increase} class="btn btn-primary m-3 pt-2 px-5">++</button>
        <button type="button" onClick={decrease} class="btn btn-secondary m-3 pt-2 px-5">--</button>
    </div>
    </div>
);
}

export default Counter;