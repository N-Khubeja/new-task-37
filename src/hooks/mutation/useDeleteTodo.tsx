import { useMutation } from "@tanstack/react-query"
import deteleTodo from "../../api/deleteTodo"
import { client } from "../../react-query/client"

const useDeleteTodo = () => {
    const result = useMutation({
        mutationFn:(id:number) => deteleTodo(id),
        onError:(err) => console.log(err),
        onSuccess:() => {
            client.invalidateQueries({queryKey: ['todos']})
        }
    })

  return result
}

export default useDeleteTodo