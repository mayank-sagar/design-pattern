import { FC, useState } from 'react'
import FormikFormFactory from '../factory/FormikFormFactory'
import { useMemo } from 'react'
import * as Yup from 'yup';
import HtmlFormFactory from '../factory/HtmlFormFactory';

const RootAbstractFactory: FC<{}> =  ({}) => {
    const [type,setType] = useState<string>("html");
    const formJSX = useMemo(() => {
        let formFactory = null;
        if(type === 'formik')  formFactory = new FormikFormFactory()
        if(type === 'html')  formFactory = new HtmlFormFactory()
        return formFactory?.createForm({
            initalValues: {
                title: '',
                note: ''
            },
            schema: Yup.object({
                title: Yup.string().required(),
                note: Yup.string().required()
            }),
            elements: [
                formFactory.createTextField({
                name:'title',
                title: "Enter Title"}),
                formFactory.createTextArea({
                name:'note',
                title: "Enter Note"}),
                formFactory.createSubmitButton({
                    title: "Add Note"
                })]}).getJsx()
    },[type])
    
    const handleFormSwitch = () => {
        setType((type) => type == "formik" ? "html" : "formik")
    }
    
      return (
        <>
        <button className="btn-switch btn-top"
        onClick={handleFormSwitch}
        > Switch Form </button>
        {formJSX}
        </>
      )
}

export default RootAbstractFactory;