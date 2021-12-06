import React from 'react';
import '../App.css';

const StartMenu = ({onClick}) => {


    return(
        <div className='startMenu color_'>
            <h3>Welcome to Who Said That </h3>
            <p>
                If you need help with the quote; click the  
                for help.
            </p>
            <p>Else you can just skip the game with the Next button</p>

            <button className='btn' onClick={() => onClick()}> Start </button>
            

        </div>
    );


}

export default StartMenu;