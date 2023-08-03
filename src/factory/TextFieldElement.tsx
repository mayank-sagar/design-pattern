import HtmlFormFactoryTextField from '../components/HtmlFactoryTextField'
import Element from './Element'

export default class TextFieldElement implements Element {
    title: string
    
    constructor(title: string) {
        this.title = title
    }

    getJsx() {
        return  (<HtmlFormFactoryTextField title={this.title}/>)
    }
}