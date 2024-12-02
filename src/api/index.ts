import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import axios from "axios";
import { logout } from "../store/authReducer/authReducer";

export const api = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error.response);
    }
);

export const createClient = (token:string,dispatch: Dispatch<UnknownAction>) => {
    const client = axios.create({
        baseURL: "http://localhost:4000",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    })
    client.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error.response.status === 401) {
                dispatch(logout());
            }
            return Promise.reject(error.response);
        }
    );

    return client;
};