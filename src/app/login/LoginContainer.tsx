import { useState } from "react";
import { Login } from "./Login"
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useLogin } from "../../api/authentication/authentication";
import { login } from "../../store/authReducer/authReducer";
import { LoginFormInputs } from "./Login.types";
import { toast } from "react-toastify";

export const LoginContainer = () => {
    const [isLoading,setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const {handleSubmit,register,formState:{errors}} = useForm<LoginFormInputs>();

    const {mutate} = useLogin({
        onSuccess: (data) => {
            toast.success("Login successful");
            dispatch(login(data));
        },
        onError: (error:any) => {
            toast.error('Something went wrong!');
        }
    })

    const onSubmit = async (data:LoginFormInputs) => {
        setIsLoading(true);
        await mutate(data);
        setIsLoading(false);
    }

    return (
        <Login
            isLoading={isLoading}
            errors={errors}
            handleSubmit={handleSubmit(onSubmit)}
            register={register}
        />
    )
}