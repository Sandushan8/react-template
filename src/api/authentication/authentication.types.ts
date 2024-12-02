export type LoginBody = {
    email: string;
    password: string;
}

export type LoginSuccessResponse ={
    token: string;
    user: {
        id: string;
        email: string;
        name: string;
    }
}