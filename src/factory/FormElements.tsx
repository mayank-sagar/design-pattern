import Element from './Element'
import * as Yup from 'yup';

export default class FormElements implements Element {
    elements: Element[]
    schema: Yup.ObjectSchema<any, Yup.AnyObject, any, ""> | null

    constructor(elements: Element[], schema:  | null) {
        this.elements = elements
        this.schema = schema 
    }
    
    getJsx() {
        return (
            <>
        <h2 className='text-center'>Html Form</h2>
        <form>
             <div 	className="form-container">
            {this.elements.map(el => el.getJsx())}
            </div>
        </form>
        </>
        )
    }
}