import FormikDatePicker from './formik-datepicker'
import FormikInput from './formik-input'
import FormikSelect from './formik-select'
import FormikTextArea from './formik-textarea'

function FormikControl(props) {
    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <FormikInput {...rest} />
        case 'textarea':
            return <FormikTextArea {...rest} />
        case 'select':
            return <FormikSelect {...rest} />
        case 'radio':
        case 'checkbox':
        case 'date':
            return <FormikDatePicker {...rest} />
        default:
            return null
    }
}

export default FormikControl
