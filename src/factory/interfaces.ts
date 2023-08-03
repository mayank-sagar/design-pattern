import Element from "./Element"
import * as Yup from 'yup';

export  interface ElementArgs {
    title: string
}

export  interface FormikElementArgs extends ElementArgs {
    name: string
}


export interface SubmitFormArgs {
    elements: Element[]
}

export interface FormikSubmitFormArgs extends SubmitFormArgs {
    schema: Object | null, 
    initalValues: {[key:string]: string | number | null | undefined}
}


export interface HTMLSubmitFormArgs extends SubmitFormArgs {
    schema: Yup.ObjectSchema<any, Yup.AnyObject, any, ""> | null, 
    initalValues: {[key:string]: string | number | null | undefined}
}
