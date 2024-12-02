import clsx from "clsx"
import { InputProps } from "./Input.types"

export const Input =({label,error,name,className,type,value,register,placeholder}:InputProps)=>{
    return (
        <div className="mt-2">
        <label>{label}</label>
        <input
        name={name}
        className={clsx(className,'w-full rounded border border-gray-300 p-2')}
        type={type}
        value={value}
        {...register}
        placeholder={placeholder}
        />
        <p className="font-semibold text-red-500">{error}</p>
        </div>

)
}