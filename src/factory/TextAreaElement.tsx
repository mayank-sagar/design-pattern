import HtmlFactoryTextArea from '../components/HtmlFactoryTextArea'
import Element from './Element'

export default class TextFieldElement implements Element {
    title: string
    
    constructor(title: string) {
        this.title = title
    }

    getJsx() {
        return (<HtmlFactoryTextArea title={this.title}/>)
    }
}