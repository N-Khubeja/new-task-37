import React, { ChangeEvent, FormEvent, ReactNode, useState } from 'react'
import { FieldsProps } from '../../interfaces/form-field.interface'
import FormInput from './FormInput'

interface CreateFormProps {
    Fields:FieldsProps[]
    action:(Formdata:Record<string,string>) => void
    Formbtn:ReactNode
}

const CreateForm:React.FC<CreateFormProps> = ({Fields,Formbtn,action}) => {
    const [Formdata,setFormdata] = useState<Record<string,string>>({})

    const Handlechange = (e:ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setFormdata(prev => ({
            ...prev,
            [name]:value
        }))
    }

    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        action(Formdata)
        e.currentTarget.reset()
    }

  return (
    <form onSubmit={onSubmit} className='p-2 border border-gray-300 m-5'>
        {Fields.map(({label,name,placeholder,type}) => (
            <FormInput 
            key={name}
            label={label} 
            name={name}
            placeholder={placeholder}
            type={type}
            Handlechange={Handlechange}
            />
        ))}

        {Formbtn}

    </form>
  )
}

export default CreateForm