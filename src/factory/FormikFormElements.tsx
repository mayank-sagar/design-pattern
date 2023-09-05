import Element from './Element'
import { Formik,Form } from 'formik';

export default class FormikFormElements implements Element {
    elements: Element[]
    initalValues: any
    schema: any
    onSubmit: any

    constructor(schema: any , initalValues: any, elements: Element[]) {
        this.elements = elements
        this.initalValues = initalValues
        this.schema = schema
    }   

    addEventListener = (onSubmit: any) => {
        this.onSubmit = onSubmit
    } 

    
    getJsx() {
        return (
            <>
            <h3 className="card-title text-center">Formik</h3>
            <Formik
                initialValues={this.initalValues}
                validationSchema={this.schema}
                onSubmit={this.onSubmit}
            >
                {() => {
                    return (<Form>
                         <div 	className="form-container">
                        { this.elements.map((el) => el.getJsx())}
                        </div>
                    </Form>)
                }}
                </Formik>
            </>
        )
    }
}