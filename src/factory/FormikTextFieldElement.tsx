import FormikFactoryTextField from '../components/FormikFactoryTextField'
import Element from './Element'

export default class FormikTextAreaElement implements Element {
    title: string
    name: string
    
    constructor(name:string, title: string) {
        this.title = title
        this.name = name
    }

    getJsx() {
        return (<FormikFactoryTextField name={this.name} placeholder={this.title}/>)
    }
}