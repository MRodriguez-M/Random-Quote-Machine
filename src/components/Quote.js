import React from "react";
import { useState } from 'react';

const Quote = (props) => {
    const [index, setIndex] = useState(0);
    const [indexArr, setIndexArr] = useState([]);

    //Checks if all quotes have cycled, generates a random index number to display a quote
    const handleClick = () => {
        const newIndexArr = [...indexArr];
        let checkNum = Math.floor(Math.random() * 10);

        if(newIndexArr.length == 0) {
            for(let i = 0; i < props.quotes.length; i++) {
                newIndexArr.push(i);
            }
        }

        for(let i = 0; i < newIndexArr.length; i++) {
            if(checkNum == newIndexArr[i]) {
                setIndex(checkNum);
                newIndexArr.splice(i, 1);
                setIndexArr(newIndexArr);
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