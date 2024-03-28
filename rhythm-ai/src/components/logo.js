import React from 'react';
import './logo.css';

export default function Logo() {
    return (
        <div className='frame-5'>
            <img src={require('../assets/images/gptLogo.png')} alt='' />
            {/* <div className='removebg-preview' /> */}
        </div>
    )
}