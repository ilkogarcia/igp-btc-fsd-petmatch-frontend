import FormikInput from './formik-input'

function FormikControl(props) {
    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <FormikInput {...rest} />
        case 'textarea':
        case 'select':
        case 'radio':
        case 'checkbox':
        case 'date':
        default:
            return null
    }
}

export default FormikControl
