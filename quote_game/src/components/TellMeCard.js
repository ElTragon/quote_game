import React, {useState} from 'react';
import '../App.css';


const TellMeCard = ({author}) =>{

    const [TellMe, setTellMe] = useState(false);

    const toggleTellMe = () =>{
        setTellMe((TellMe) => (!TellMe));
    }

    const tellAuthor = () =>{
        if(TellMe === true){
            return author;
        }else{
            return '';
        }
    }

    const tellBtn = () => {
        if(TellMe === false){
            return 'Tell Me';
        }else{
            return 'Hide Author';
        }
    }

    return(
        <div className='tellMe'>
            <h2>{tellAuthor()}</h2>
            <h3> {} </h3>
            

            
          
  <button className='btn l2' onClick={toggleTellMe}> {tellBtn()}</button>
            

        </div>
    )

    
}

export default TellMeCard;
