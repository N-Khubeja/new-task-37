import React, { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import useDeleteTodo from '../../hooks/mutation/useDeleteTodo'

interface TodoItemProps{
    id:number
    title:string
    completed:boolean
    description:string
}

const TodoItem:React.FC<TodoItemProps> = ({completed,id,title,description}) => {
    const {mutate} = useDeleteTodo()

    const navigate = useNavigate()

    const handleDelete = (e:MouseEvent<HTMLButtonElement>,id:number) => {
      e.stopPropagation()
      mutate(id)
    }

  return (
        <div onClick={() => navigate(`/todos/${id}`)} key={id} className='border border-gray-300 cursor-pointer relative'>
                <h3>{title}</h3>
                <h3 className='text-orange-600'>{completed ? 'done' : 'panding'}</h3>
                <p className='text-amber-800'>{description}</p>
                <button 
                onClick={(e) => handleDelete(e,id)}
                className='absolute text-red-800 p-2 top-1 right-1'>
                  X
                </button>
        </div>
  )
}

export default TodoItem