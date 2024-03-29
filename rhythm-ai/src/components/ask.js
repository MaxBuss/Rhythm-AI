import React, { useEffect } from 'react';
import './ask.css';


export default function Ask({ className,
    inputValue,
    setInputValue,
    makeOpenAIPost }) {
    const [inputCharCount, setInputCharCount] = React.useState(0);
    return (
        <div className='frame-27'>
            {/* <button className='frame-28'>
                <div className='et-chat'>
                    <div className='group' />
                </div>
                <span className='new-topic'>New topic</span>
            </button> */}
            <div className='frame-29'>
                <div className='ask-me-anything'>
                    <input
                        className="ask"
                        type="text"
                        name="name"
                        placeholder="Ask me anything..."
                        value={inputValue}
                        onChange={(event) => {
                            setInputValue(event.target.value);
                            setInputCharCount(event.target.value.length);
                        }}
                        onKeyDown={(event) => { event.key === "Enter" && setInputValue("") }}
                    />
                    <div className='frame-2b'>
                        <span className='slash-zero-four-thousand'>{inputCharCount}/4000</span>
                        <div className='send'>
                            <div className='vector' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}