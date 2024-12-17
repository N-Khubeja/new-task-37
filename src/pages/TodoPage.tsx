import React from 'react'
import useFetchTodo from '../hooks/query/useFetchTodo'
import { useParams } from 'react-router-dom'
import { ITodo } from '../interfaces/todo.interface'
import TodoItem from '../components/todo/TodoItem'

const TodoPage:React.FC = () => {
  const {id} = useParams()
  const {data,error,isLoading} = useFetchTodo(id!)
  const {completed,id:todoId,title} = data || ({} as ITodo)
  console.log(completed,todoId,title)

  if(error) return <h3>{error.message}</h3>
  if(isLoading) return <h3>...LOADING</h3>
  return (
    <div>
      <TodoItem completed={completed} id={todoId} title={title}/>
    </div>
  )
}

export default TodoPage