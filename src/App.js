import React, { useState } from "react";
import { FaTwitter, FaWhatsapp } from "react-icons/fa";

import { quotes } from "./data";
import "./App.css";

const App = () => {
  const currentQuote = Math.floor(Math.random() * quotes.length);
  const [quote, setQuote] = useState(currentQuote);

  return (
    <div id='quote-box'>
      <blockquote>
        <p id='text'>{quotes[quote].quote}</p>
        <cite id='author'>{quotes[quote].author}</cite>
      </blockquote>
      <div className='control'>
        <button
          id='new-quote'
          onClick={() => setQuote(Math.floor(Math.random() * quotes.length))}
        >
          New Quote
        </button>
        <div className='social'>
          <a
            href='https://twitter.com/intent/tweet'
            target='_blank'
            id='tweet-quote'
          >
            <span>
              <FaTwitter color='dodgerblue' size={24} />
            </span>
          </a>
          <a href='#'>
            <span>
              <FaWhatsapp color='#00b33c' size={24} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
