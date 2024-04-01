import React, { useEffect } from 'react';
import './homePage.css';
import Logo from './logo.js';
import Header from './header.js';
import Suggestions from './suggestions.js';
import Ask from './ask.js'

  export const HomePage = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [aIResoponseArray, setAIResponseArray] = React.useState([]);
  const [inputValueArray, setInputValueArray] = React.useState([]);

  useEffect(() => {
    console.log("aIResoponseArray", aIResoponseArray);
  } , [inputValueArray, aIResoponseArray]);

  const makeOpenAIPost = async (input) => {
    let value;
    if (inputValue === "")
        value = input;
    else
        value = inputValue;
    console.log("inputValue", value);
    setInputValueArray([...inputValueArray, value]);
    try {
        const response = await fetch("http://localhost:5279/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: value }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        setAIResponseArray([...aIResoponseArray, data.message]);
        
        setInputValue("");
    } catch (error) {
        console.error("Error:", error);
    }
};

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
        {aIResoponseArray.length <= 0 && <Suggestions />}
        {aIResoponseArray.length > 0 && 
          <>
            <p>{inputValueArray[0]}</p>
            <p>{aIResoponseArray[0]}</p>
          </>
        }
      </div>
      <div>
        <Ask inputValue={inputValue} setInputValue={setInputValue} makeOpenAIPost={makeOpenAIPost}/>
      </div>
    </div>
  );
}
