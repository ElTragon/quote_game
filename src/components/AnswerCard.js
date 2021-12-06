import React, {useState} from 'react';
import '../App.css';



const AnswerCard = ({check, nextQuote}) => {

    // const [value, setValue] = useState(check);

    const result = () => {
        if (check === 0){
            return '';
        }else if(check === 1){
            return 'CORRECT'
        }else{
            return 'Try again'
        }
    }

    const btntext = () =>{
        if(check === 1){
            return 'Next'
        }else{
            return 'Skip'
        }
    }


    return(
        <div className='answer'>
            <h2>{result()}</h2>
            <h3> {} </h3>
            

            
          
  <button className='btn' onClick={nextQuote}> {btntext()}</button>
            

        </div>
    );
}

export default AnswerCard;
