import FormikInput from './formik-input'
import FormikTextArea from './formik-textarea'

function FormikControl(props) {
    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <FormikInput {...rest} />
        case 'textarea':
            return <FormikTextArea {...rest} />
        case 'select':
        case 'radio':
        case 'checkbox':
        case 'date':
        default:
            return null
    }
}

export default FormikControl
