import HtmlFactorySubmitButton from '../components/HtmlFactorySubmitButton'
import Element from './Element'

export default class SubmitButtonElement implements Element {
    
    title: string
    constructor(title: string) {
        this.title = title
    }
    
    getJsx() {
        return  (<HtmlFactorySubmitButton title={this.title} />)
    }
}