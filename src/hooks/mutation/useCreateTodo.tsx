import { useMutation } from "@tanstack/react-query"
import createTodo from "../../api/CreateTodo"
import { ITodo } from "../../interfaces/todo.interface"
import { client } from "../../react-query/client"

const useCreateTodo = () => {
    const result = useMutation({
        mutationFn: (data:Partial<ITodo>) => createTodo(data),
        onError:(err) => console.log(err),
        onSuccess:(res) => {
            client.invalidateQueries({queryKey:['todos']})
            console.log(res)
        }
    })

  return result
}

export default useCreateTodo