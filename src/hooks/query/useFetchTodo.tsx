import { useQuery } from "@tanstack/react-query"
import fetchTodo from "../../api/fetchTodo"
import { ITodo } from "../../interfaces/todo.interface"

const useFetchTodo = (id:string) => {
    const result = useQuery<ITodo>({
        queryKey:['todo'],
        queryFn:() => fetchTodo(id)
    })

  return result
}

export default useFetchTodo