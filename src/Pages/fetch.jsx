import { useState } from 'react';
import { data } from '../Component/data';

const Fetch = () => {
    const[data, setData] = useState("hello")
    function update() {
        setData(data)
    }
    return (
        <div>
            <h1 className='text-center'>Welcome To Fetch Page</h1>
            <p>Lorem10</p>
            <hr />
            <div>
                <div>
                    <img src='' alt=''/>
                </div>
                <h2>{data.title}</h2>
                <p>{data.detailes}</p>
                <p>You have entered: {data}</p>
            </div>
        </div>
    );
}

export default Fetch;
