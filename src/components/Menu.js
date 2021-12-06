import React, {useState} from 'react';
import StartMenu from './StartMenu';
import '../App.css';
import GameManeger from './GameManager';

const MenuCard = () => {

    // manages start_menu and game start

    const [start, setStart] = useState(false);


    const onClick = () =>{
        console.log('clikced')
        setStart(start => true);
    }

    return(
        <div className='card'>
        
            {start === false && <StartMenu onClick={onClick}/>}
            {start === true && <GameManeger/>}
            {/* <StartMenu onClick={onClick}/>
            <GameManeger/> */}
            {/* <h3> Temp hold value</h3>
            <div className='sub_card'>
                <h3> Temp hold value</h3>
            </div>
            <div className='sub_card'>
                <h3> Temp holdee value</h3>
            </div>
            <h3> Temp hold value</h3>
            <div className='sub_card'>
                <h3> Temp hold value</h3>
            </div>
            <div className='sub_card'>
                <h3> Temp holdee value</h3>
            </div>
            <h3> Temp hold value</h3>
            <div className='sub_card'>
                <h3> Temp hold value</h3>
            </div>
            <div className='sub_card'>
                <h3> Temp holdee value</h3>
            </div> */}
        </div>
    );
}

export default MenuCard;