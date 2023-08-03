import  AbstractFormFactory  from "./AbstractFormFactory";
import TextAreaElement from "./TextAreaElement";
import TextFieldElement from "./TextFieldElement";
import Element from "./Element";
import FormElements from "./FormElements";
import SubmitButtonElement from "./SubmitButtonElement";
import { ElementArgs, HTMLSubmitFormArgs } from './interfaces';

export default class HtmlFormFactory implements AbstractFormFactory {
    
    createTextField({ title }: ElementArgs): Element {
        return new TextFieldElement(title)
    }
    
    createTextArea({ title }: ElementArgs): Element {
        return new TextAreaElement(title)
    }

    createSubmitButton({ title }: ElementArgs): Element {
        return new SubmitButtonElement(title)
    }

    createForm({elements, schema}: HTMLSubmitFormArgs ): Element {
        return new FormElements(elements,schema)
    }
    
}