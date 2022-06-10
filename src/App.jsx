import React, {useEffect, useState} from 'react';

const App = () =>{

  const [quoteInfo, setQuoteInfo] = useState({});


  useEffect(() =>{
    getQoute();
  },[])


  const getQoute = () =>{
    fetch('https://api.quotable.io/random')
      .then((reponse) =>{return reponse.json()})
      .then((data) =>{
        setQuoteInfo({
          text: data.content,
          author: data.author
        })
        console.log(data);
      });
  };


  return(
    <div className="App">
      <div id="quote-box">
        <p id="text">{quoteInfo.text}</p>
        <hr/>
        <p id="author">{quoteInfo.author}</p>

        <button 
          id="new-quote"
          onClick={getQoute}
        >New quote</button>
        <a 
          id="tweet-quote"
          href="twitter.com/intent/tweet"
        >Share quote</a>
      </div>
    </div>
  );
}


export default App;