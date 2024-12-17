import $axios from "../http/axios";
import { ITodo } from "../interfaces/todo.interface";

export default async function createTodo(data:Partial<ITodo>){
    const res = await $axios.post('todos', {todo: {...data}})
    console.log(res.data)
    return res.data
}