import $axios from "../http/axios";

export default async function deteleTodo(id:number){
    const res = await $axios.delete(`todos/${id}`)
    return res.data
}