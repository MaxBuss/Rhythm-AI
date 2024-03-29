import React, { useEffect } from 'react';
import './suggestions.css';
import SuggestedQuestions from './suggestedQuestions.js';
import SuggestionCard from './suggestionCard.js';


export default function Suggestions() {

    useEffect(() => {
        console.log(SuggestedQuestions[0].question);
    }, [SuggestedQuestions]);
    return (
        // <div className="">
        //     <div className="frame-7">
        //         <SuggestionCard
        //             // className="card-instance"
        //             // property1="default"
        //             // topic={SuggestedQuestions[0].topic}
        //             question={SuggestedQuestions[0].question}

        //         />
        //         <SuggestionCard
        //             className="card-instance"
        //             property1="default"
        //             topic={SuggestedQuestions[1].topic}
        //             question={SuggestedQuestions[1].question}

        //         />
        //         <SuggestionCard
        //             className="card-instance"
        //             property1="default"
        //             topic={SuggestedQuestions[2].topic}
        //             question={SuggestedQuestions[2].question}

        //         />
        //         <SuggestionCard
        //             className="card-instance"
        //             property1="default"
        //             topic={SuggestedQuestions[3].topic}
        //             question={SuggestedQuestions[3].question}

        //         />
        //     </div>
        //     <div className="frame-8">
        //         <SuggestionCard
        //             className="card-instance"
        //             property1="default"
        //             topic={SuggestedQuestions[4].topic}
        //             question={SuggestedQuestions[4].question}

        //         />
        //         <SuggestionCard
        //             className="card-instance"
        //             property1="default"
        //             topic={SuggestedQuestions[5].topic}
        //             question={SuggestedQuestions[5].question}

        //         />
        //         <SuggestionCard
        //             className="card-instance"
        //             property1="default"
        //             topic={SuggestedQuestions[6].topic}
        //             question={SuggestedQuestions[6].question}

        //         />
        //     </div>
        // </div>
        <div className='frame-7'>
            <div className='frame-8'>
                <SuggestionCard
                    // className="card-instance"
                    // property1="default"
                    topic={SuggestedQuestions[1].topic}
                    question={SuggestedQuestions[0].question}
                />
                <SuggestionCard
                    // className="card-instance"
                    // property1="default"
                    topic={SuggestedQuestions[1].topic}
                    question={SuggestedQuestions[1].question}
                />
                <SuggestionCard
                    // className="card-instance"
                    // property1="default"
                    topic={SuggestedQuestions[2].topic}
                    question={SuggestedQuestions[2].question}
                />
                <SuggestionCard
                    // className="card-instance"
                    // property1="default"
                    topic={SuggestedQuestions[3].topic}
                    question={SuggestedQuestions[3].question}
                />
            </div>
            <div className='frame-18'>
                <SuggestionCard
                    // className="card-instance"
                    // property1="default"
                    topic={SuggestedQuestions[4].topic}
                    question={SuggestedQuestions[4].question}
                />
                <SuggestionCard
                    // className="card-instance"
                    // property1="default"
                    topic={SuggestedQuestions[5].topic}
                    question={SuggestedQuestions[5].question}
                />
                <SuggestionCard
                    // className="card-instance"
                    // property1="default"
                    topic={SuggestedQuestions[6].topic}
                    question={SuggestedQuestions[6].question}
                />
            </div>
        </div>
    )
}