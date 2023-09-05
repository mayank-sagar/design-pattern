import { FC, useState, useMemo, useContext, useEffect } from 'react'
import * as Yup from 'yup';
import FormikFormFactory from '../factory/FormikFormFactory'
import HtmlFormFactory from '../factory/HtmlFormFactory';
import {StoreContext } from '../store/StoreContext';

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
    const { setNavContent } = useContext(StoreContext)
    
    const handleFormSwitch = () => {
        setType((type) => type == "formik" ? "html" : "formik")
    }
    
    useEffect(() => {
        setNavContent([<button 
            key={1}
            className="btn-switch btn-top"
            onClick={handleFormSwitch}
            >Switch Form
            </button>]
)
    },[setNavContent])
      return (
     <div className="card">
        <div className="card-body">
            {formJSX}
        </div>
    </div> 
      )
}

export default RootAbstractFactory;