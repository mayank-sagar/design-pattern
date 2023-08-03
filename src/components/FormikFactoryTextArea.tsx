import { useField } from 'formik';
import { FC } from 'react';

const FormikFactoryTextArea: FC<{name: string, placeholder: string}> = (props) => {
    const [field, meta] = useField(props);
    return (
        <>
        <textarea  
            {...field}
            {...props} 
            className="form_text_area margin-bottom-1rem "
        ></textarea>
        {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
        ) : null}
        </>
    )
}

export default FormikFactoryTextArea