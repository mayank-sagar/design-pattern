import { FC } from "react"
const HtmlFormFactoryTextField:FC<{ title: string }> = ({ title }) => {
    return <input placeholder={title} type="text " className="form_text_field margin-bottom-1rem " />
}

export default HtmlFormFactoryTextField