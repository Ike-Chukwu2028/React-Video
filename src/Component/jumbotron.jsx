import React from 'react';

const Jumbotron = (props) => {
    return (
        <div className='container b1-light shadow jumbotron p-4'>
        <h1 className='bg-dark text-light D-3'>{props.title}</h1>
        <strong className='bg-info text-dark p-2'>{props.desc}</strong>
            
        </div>
    );
}

export default Jumbotron;
