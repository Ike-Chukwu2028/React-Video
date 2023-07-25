import React from 'react';
import { useState, useEffect } from 'react';

const Counter = () => {
    const[count, setCount]= useState(0)
    const[auth, setAuth] = useState(false)
    function Handleincrease(){
        setCount (count +1)
    }
    function Handledecrease(){
        setCount (count -1)
    }
    function Handlereset(){
        setCount (0)
    }

    useEffect (() =>{
        if (count>=5) {
            setAuth(true)
            console.log("You are authorized")
        } else {
            console.log("Access denied");
        }
        console.log("Use Effect is running.../nCount has changed to:" + count);
    }, [auth, count])
    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button className='btn btn-danger' onClick={Handledecrease}>Derease</button>
                <button className='btn btn-info' onClick={Handlereset}>Reset</button>
                <button className='btn btn-success' onClick={Handleincrease}>Increase</button>
            </div>
        </div>
    );
}

export default Counter;
