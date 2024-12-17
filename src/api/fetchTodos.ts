import $axios from "../http/axios";

export default async function fetchTodos() {
    const res = await $axios.get('/todos')
    return res.data
}

