import React, {useState, useEffect} from 'react';
import '../App.css';

const InputText = (props) => {

    let props_status = {
        active: (props.locked && props.active) || false,
      value: props.value || "",
      error: props.error || "",
      label: props.label || "Label" 
    };

    const [status, setStatus] = useState(props_status);

    const onChange = (e) =>{
        props.onChange(e.target.value);
        
        setStatus((status) => ({
            ...status,
            error: '',
        }))
    }

    const { active, value, error, label } = status;
    const { locked } = props;
    const fieldClassName = `field ${(locked ? active : active || value) &&
      "active"} ${locked && !active && "locked"}`;

    return(
        <div className={fieldClassName}>
        <input
          id={1}
          type="text"
          value={props.value}
          placeholder={label}
          onChange={onChange.bind(this)}
        //   onKeyPress={this.handleKeyPress.bind(this)}
          onFocus={() => !locked && setStatus((status) => ({ ...status,active: true }))}
          onBlur={() => !locked && setStatus((status) => ({ ...status, active: false }))}
        />
        <label htmlFor={1} className={`label ${error && "error"}`}>
          {error || label}
        </label>    
        </div>
    )
}

export default InputText;