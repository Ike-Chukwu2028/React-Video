import React from 'react';
import Jumbotron from '../Component/jumbotron';

const Contact = () => {
    const style = {
        backgroundColor: "",
        Color: "white"
    }
    return (
        <div style={style}>
        <Jumbotron title='This is Contact Page' desc='Contact us via facebook instagram' />
            <h1>Contact Page</h1>
        </div>
    );
}

export default Contact;
