import $axios from "../http/axios";

export default async function fetchTodo(id:string) {
    const res = await $axios.get(`todos/${id}`)
    return res.data
}