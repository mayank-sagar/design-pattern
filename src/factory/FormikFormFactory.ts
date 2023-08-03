import  AbstractFormFactory  from "./AbstractFormFactory";
import FormikTextAreaElement from "./FormikTextAreaElement";
import FormikTextFieldElement from "./FormikTextFieldElement";
import Element from "./Element";
import FormikFormElements from "./FormikFormElements";
import SubmitButtonElement from "./SubmitButtonElement";
import { ElementArgs, FormikElementArgs, FormikSubmitFormArgs } from './interfaces';

export default class FormikFormFactory implements AbstractFormFactory {
    
    createTextField({name , title}: FormikElementArgs): Element {
        return new FormikTextFieldElement(name , title)
    }
    
    createTextArea({name , title}: FormikElementArgs): Element {
        return new FormikTextAreaElement(name, title)
    }

    createSubmitButton({title } : ElementArgs): Element {
        return new SubmitButtonElement(title)
    }

    createForm({ schema, initalValues, elements } :FormikSubmitFormArgs): Element {
        return new FormikFormElements(schema, initalValues, elements)
    }
    
}