import { ChangeEvent } from 'react';
interface inputView{
    type: string,
    id: string, 
    required: boolean,
    min: number,
    max: number,
    value?: string ,
    name: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
interface colorPalette{
    title?: string,
    color_one?: string,
    color_two?: string,
    color_three?: string, 
    color_four?: string
}
export type{
    inputView,colorPalette
}

