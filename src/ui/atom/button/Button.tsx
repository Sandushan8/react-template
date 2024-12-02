import clsx from "clsx"
import { ButtonProps } from "./Button.types"

export const Button =({type,text,className}:ButtonProps)=>{
    return (
        <div className="mt-2">
        <button type={type} className={clsx(className,"mt-4 w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700")}>
            {text}
        </button>
        </div>
    )
}