import React,{TextareaHTMLAttributes} from 'react';
import {FormContainerText } from './styles';

interface TextProps  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label : string,
    name : string
}

const TextArea: React.FC<TextProps> = ({label, name, ...rest}) => {
  return(
    <FormContainerText>
        <label htmlFor={name}>{label} </label>
        <textarea id={name} {...rest}/>
    </FormContainerText>
  );
}

export default TextArea;
