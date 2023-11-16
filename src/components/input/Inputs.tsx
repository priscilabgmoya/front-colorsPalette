import './Inputs.css'
import {inputView} from '../types/types'; 
import { ChangeEvent } from 'react';

function Inputs(props: inputView) {

  return (
    <input 
    required={props.required} 
    onChange={(e:ChangeEvent<HTMLInputElement>)=> props.onChange(e) } 
    max={props.max} 
    maxLength={props.max}
    min={props.min}
    minLength={props.min}
    type={props.type}
    value={props.value}
    id={props.id}
    name={props.name}
    />
  )
}

export default Inputs;