import { useMutation,UseMutationOptions } from "@tanstack/react-query"
import { api } from ".."
import { LoginBody, LoginSuccessResponse } from "./authentication.types"


const login = (body: LoginBody) => api.post<LoginSuccessResponse>("auth/login", body).then((response) => response.data)

export const useLogin =(
    options?: UseMutationOptions<LoginSuccessResponse,unknown,LoginBody,unknown> 
)=>useMutation({
    mutationFn: login,
    ...options
})