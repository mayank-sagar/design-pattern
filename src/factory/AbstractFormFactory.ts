import Element from "./Element";
import { ElementArgs, SubmitFormArgs } from "./interfaces";

export default interface AbstractFormFactory {
    createTextField(args: ElementArgs):  Element
    createTextArea(args: ElementArgs): Element
    createSubmitButton(args: ElementArgs): Element
    createForm(args: SubmitFormArgs): Element
}