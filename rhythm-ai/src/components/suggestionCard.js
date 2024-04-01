import React, { useEffect } from 'react';
import './suggestionCard.css';

export default function SuggestionCard({ className, topic, question }) {

    return (
        <>
            <div
                className={`card ${className}`}
            // onClick={makeAPICall}
            >
                <div className="frame">
                    {/* <img
                    className="fun-fact"
                    src={lightbulb}
                    alt="Fun fact"
                // src={
                //     state.property1 === "light"
                //         ? "fun-fact.png"
                //         : state.property1 === "hover"
                //             ? "fun-fact-3.png"
                //             : state.property1 === "variant-4"
                //                 ? "image.png"
                //                 : funFact
                // }
                /> */}
                    <div className="text-wrapper">{topic}</div>
                </div>
                <p className="div">{question}</p>
            </div>
        </>
    );
};