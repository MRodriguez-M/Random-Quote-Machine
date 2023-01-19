import React from "react";
import { useState } from 'react';

const Quote = (props) => {
    const [index, setIndex] = useState(0);

    const handleClick = () => {
        setIndex(Math.floor(Math.random() * 3));
    };

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <div id="quote-box">
                <p id="text">"{props.quotes[index].quote}"</p>
                <p id="author">- {props.quotes[index].author}</p>
                <a id="tweet-quote">
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