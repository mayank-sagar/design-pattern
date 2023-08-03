import { FC } from "react"

const HtmlFactoryTextArea:FC<{ title: string }> = ({ title }) => {
    return   (
        <textarea 
        placeholder={title} 
        className="form_text_area margin-bottom-1rem ">
        </textarea>)
}

export default HtmlFactoryTextArea