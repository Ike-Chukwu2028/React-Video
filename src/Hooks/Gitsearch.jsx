import React, { useState, useEffect } from 'react';

const Gitsearch = () => {
    const [data, setData] = useState("")
    const [loading, setLoading] = useState(false)
    const [userID, setUserid] = useState("")
    const [url, setUrl] = useState("https://api.github.com/${userID}")

    const handleChange = (e) => {
        setUserid(e.target.value)
    }
    useEffect(()=>{
        console.log(url);
    }, [url])
    const handlesubmit=(e) =>{
        e.preventDefault()
        setUrl("https://api.github.com/${userID}")
    }
    return (
        <div>
            <h1 className='text-center'>Hello welcome to Gitsearch App</h1>
            <div className='search col-md-6 offset-md-3'>
                <input className='form-control p-3 mt-3' type='text' placeholder='Search Github User' value={userID} onChange={handleChange} ></input>
                <button onSubmit={handlesubmit}>Submit</button>
                <br></br>
                <hr></hr>
                <h3>You Entered: {userID}</h3>
                <p>Url: {url}</p>
            </div>
        </div>
    );
}

export default Gitsearch;
