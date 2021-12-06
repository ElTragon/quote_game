import React, {useState} from 'react';
import InputText from './InputText';
import '../App.css';

const QuoteCard = ({quote, value_, onChange_, onClick}) => {

    // const [value, setValue] = useState('');

    // const handleChange = (val) =>{
    //     setValue(val);
    // }

    return(
        <div className='question'>
            <h2>Who Said: </h2>
            <h3> {quote} </h3>
            

            <h1></h1>
            <InputText
    id={1}
    label='Author: '
    predicted=''
    locked={false}
    active={false}
    value={value_}
    onChange={ onChange_}
  />
  <button className='btn ' onClick={onClick}> Check </button>
            {/* <div className={fieldClassName}>
        {active &&
          value &&
          predicted &&
          predicted.includes(value) && <p className="predicted">{predicted}</p>}
        <input
          id={1}
          type="text"
          value={value}
          placeholder={label}
          onChange={this.changeValue.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
          onFocus={() => !locked && this.setState({ active: true })}
          onBlur={() => !locked && this.setState({ active: false })}
        />
        <label htmlFor={1} className={error && "error"}>
          {error || label}
        </label>
      </div> */}

        </div>
    );
}

export default QuoteCard;