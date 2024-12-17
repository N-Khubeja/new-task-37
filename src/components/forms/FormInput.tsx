import React from 'react'
import { FieldsProps } from '../../interfaces/form-field.interface'

const FormInput:React.FC<FieldsProps> = ({label,name,placeholder,type,Handlechange}) => {
  return (
    <div>
        <div key={label}>
                <label htmlFor={name}>{label}</label>
                <input 
                 type={type}
                 placeholder={placeholder} 
                 name={name} 
                 id={name}
                 onChange={Handlechange}
                 />
            </div>
    </div>
  )
}

export default FormInput