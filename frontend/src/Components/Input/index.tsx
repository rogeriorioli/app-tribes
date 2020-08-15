import React,{InputHTMLAttributes} from 'react';
import { FormContainer } from './styles';

interface InputProps  extends InputHTMLAttributes<HTMLInputElement> {
    label : string,
    name : string
}

const Input: React.FC<InputProps> = ({label, name, ...rest}) => {
  return(
    <FormContainer>
        <label htmlFor={name}>{label} </label>
        <input type="text" id={name} {...rest}/>
    </FormContainer>
  );
}

export default Input;
