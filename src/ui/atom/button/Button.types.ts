import { DetailedHTMLProps } from "react";

export type ButtonProps = {
    text:string;
    className?:string;
    type:DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>['type'];
}