import { ChangeEvent } from "react"

export interface FieldsProps{
    label:string
    name:string
    placeholder:string
    type:string
    Handlechange?:(e:ChangeEvent<HTMLInputElement>) => void
}