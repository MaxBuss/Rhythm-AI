import React from 'react';
import './homePage.css';
import Logo from './logo.js';
import Header from './header.js';
import Suggestions from './suggestions.js';
import Ask from './ask.js'

export default function HomePage() {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <div className='main-container'>
      <div className='menu'>
        <div className='line' />
        <div className='line-1' />
        <div className='line-2' />
      </div>
      <div className='logo-header-chat'>
        <div className='frame-4'>
          <Logo />
          <Header/>
        </div>
      </div>
      <div>
        <Suggestions />
      </div>
      <div>
        <Ask inputValue={inputValue} setInputValue={setInputValue} />
      </div>
    </div>
  );
}
