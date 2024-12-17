import React from 'react'
import { FieldsProps } from '../../interfaces/form-field.interface'
import CreateForm from '../forms/CreateForm'
import useCreateTodo from '../../hooks/mutation/useCreateTodo'

const CreateTodo:React.FC = () => {

    const {mutate} = useCreateTodo()

    const Fields:FieldsProps[] = [
        {name:'title',label:'title',placeholder:'todo title',type:'text'},
        {name: 'description', label: 'description', placeholder: 'todo description', type: 'text'}

    ]

    const onSubmit = (Formdata:Record<string,string>) => {
        mutate(Formdata)
        console.log(Formdata)
    }

    const Createbtn = () => {
        return <button type='submit'>Create todo</button>
    }
  return (
    <CreateForm Fields={Fields} Formbtn={Createbtn()} action={onSubmit}/>
  )
}

export default CreateTodo