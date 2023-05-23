import React from "react";
import { useState } from 'react';

const Quote = (props) => {
    const [index, setIndex] = useState(0);
    const [indexArr, setIndexArr] = useState([]);
    
    const resetIndexArr = () => {
        for(let i = 0; i < props.quotes.length; i++) {
            setIndexArr((prevIndexes) => [...prevIndexes, i]);
        }
    };

    const handleClick = () => {
        if(indexArr.length == 0) {
            resetIndexArr();
        }

        let checkNum = Math.floor(Math.random() * 10);

        for(let i = 0; i < indexArr.length; i++) {
            if(checkNum == indexArr[i]) {
                setIndex(checkNum);
                setIndexArr((prevInd) => {
                    const newIndexArr = [...prevInd];
                    newIndexArr.splice(i, 1);
                    return newIndexArr;
                })
                break;
            }
            else if((checkNum != indexArr[i]) && (i == indexArr.length-1)) {
                checkNum = Math.floor(Math.random() * 10);
                i = -1;
            }
        }
    };

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <div id="quote-box">
                <p id="text">"{props.quotes[index].quote}"</p>
                <p id="author">- {props.quotes[index].author}</p>
                <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank">
                    <button id="tweet-button" type="button">
                        <i class="fa fa-twitter"></i> Share on Twitter
                    </button>
                </a>
                <button id="new-quote" type="button" onClick={handleClick}>New quote</button>
            </div>
        </>
    );
};

export default Quote;