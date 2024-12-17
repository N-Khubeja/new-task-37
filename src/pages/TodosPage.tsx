import React, { Fragment } from 'react'
import useFetchTodos from '../hooks/query/useFetchTodos'
import TodoList from '../components/todo/TodoList'
import CreateTodo from '../components/todo/CreateTodo'

const TodosPage:React.FC = () => {
    const {data:todos, error, isLoading} = useFetchTodos()

  if(error) return <h1>{error.message}</h1>
  if(isLoading) return <h1>...LOADING</h1>

  return (
    <Fragment>
      <TodoList todos={todos}/>
      <CreateTodo/>
    </Fragment>
    
  
  )
}

export default TodosPage