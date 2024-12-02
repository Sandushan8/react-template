import { FormState, UseFormReturn } from "react-hook-form";

export type LoginFormInputs = {
    email: string;
    password: string;
}

export type LoginProps ={
    handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
    isLoading: boolean;
    register: UseFormReturn<LoginFormInputs>['register'];
    errors: FormState<LoginFormInputs>['errors'];
}