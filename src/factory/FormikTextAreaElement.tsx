import FormikFactoryTextArea from '../components/FormikFactoryTextArea'
import Element from './Element'

export default class FormikTextAreaElement implements Element {
    title: string
    name: string
    
    constructor(name:string, title: string) {
        this.title = title
        this.name = name
    }

    getJsx() {
        return (<FormikFactoryTextArea name={this.name} placeholder={this.title}/>)
    }
}