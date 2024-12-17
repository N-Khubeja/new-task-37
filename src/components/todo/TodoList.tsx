import React from 'react'
import { ITodo } from '../../interfaces/todo.interface'
import TodoItem from './TodoItem'

interface TodoListProps{
    todos:ITodo[] | undefined
}

const TodoList:React.FC<TodoListProps> = ({todos}) => {
  return (
    <div>
        {todos?.map(({isCompleted,id,title,description}) => (
            <TodoItem completed={isCompleted} id={id} title={title} key={id} description={description}/>
        ))}
    </div>
  )
}

export default TodoList