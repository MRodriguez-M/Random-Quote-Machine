import React from "react";

const Quote = () => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <div id="quote-box">
                <p id="text">"The worst enemy to creativity is self-doubt."</p>
                <p id="author">- Sylvia Plath</p>
                <a id="tweet-quote">
                    <button id="tweet-button" type="button">
                        <i class="fa fa-twitter"></i> Share on Twitter
                    </button>
                </a>
                <button id="new-quote" type="button">New quote</button>
            </div>
        </>
    );
};

export default Quote;