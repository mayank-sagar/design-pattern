import { FC } from "react"

const HtmlFactorySubmitButton:FC<{ title: string }> = ({ title }) => {
    return <button className="form_submit">{title}</button>
}

export default HtmlFactorySubmitButton