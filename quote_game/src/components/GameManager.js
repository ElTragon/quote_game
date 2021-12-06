import React, {useState, useEffect, useCallback} from 'react';
import '../App.css';
import QuoteCard from './QuoteCard';
import AnswerCard from './AnswerCard';
import TellMeCard from './TellMeCard';

// import axios from 'axios';

const GameManeger = () => {

    const [quote, setQuote] = useState({});
    const [help, setHelp] = useState(false);
    const [value, setValue] = useState('');
    //0 no check yet, -1 wrong answer, 1 right answer
    const [check, setCheck] = useState(0);
    function update(response) {
        console.log(JSON.stringify(response));
      }
      
      function handleErr(jqxhr, textStatus, err) {
        console.log("Request Failed: " + textStatus + ", " + err);
      }
    const fetchNewQuote = useCallback( async () => {
        const apiCall = 'https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
        
        /*
            If the app is not working make sure to go to this link
                - https://cors-anywhere.herokuapp.com
            and request permission to use the app. 
            README has more info why this is needed and why
        */         
      

  
        fetch(apiCall).then(async (res) => {
            let data = await res.json() ;
            
            setQuote((quote) => ({...data}));
        });
    },[]);

    useEffect( () => {
        fetchNewQuote();
    }, []);

    // catch times the quote has no author
    useEffect( () => {
       
        if(quote.quoteAuthor === '' ){
            fetchNewQuote();
        }
       // console.log(quote)
    }, [quote]);

    const newQuote = () => {
        fetchNewQuote();
    }

    const toggleHelp = () => {
        setHelp(help => (!help));
    }

    const handleChange = (val) =>{
        setValue(val);
    }
    const handleCheck = () => {
        console.log(value, ' ', quote.quoteAuthor)
        if(value.normalize() === quote.quoteAuthor.normalize()){
            setCheck(1);
            console.log(value, ' sssss', quote.quoteAuthor)
        }else{
            setCheck(-1);
        }
    }

    return(
        <div className='color_'>
            <QuoteCard quote={quote.quoteText} value_={value} onChange_={handleChange} onClick={ handleCheck }/>
            {/* <div>
                {quote.quoteAuthor}
            </div> */}
            <TellMeCard author={quote.quoteAuthor}/>

            <AnswerCard check={check} nextQuote={fetchNewQuote}/>
           
        </div>
    )

}

export default GameManeger;