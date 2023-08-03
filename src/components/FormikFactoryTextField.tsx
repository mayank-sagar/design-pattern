import { useField } from 'formik';
import { FC } from 'react';

const FormikFactoryTextField: FC<{name: string, placeholder: string}> = (props) => {
    const [field, meta] = useField(props);
    return (
        <>
        <input  
            {...field}
            {...props} 
            type="text"
            className="form_text_field margin-bottom-1rem " 
        />
        {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
        ) : null}
        </>
    )
}

export default FormikFactoryTextField