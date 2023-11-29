const questionControl = () => {
  const controls = [
    {
      label: 'Question*',
      type: 'text',
      value: '',
      key: 'title',
      placeholder: 'Enter Question here',
      span: 12,
      rules: {
        required: 'Question is Required'
      }

    },
    {
      label: '',
      type: 'text',
      value: '',
      key: 'option1',
      span: 5,
      placeholder: 'A. Enter option here...',
      rules: {
        required: 'Option1 Name is Required'
      }
    },
    {
      label: '',
      type: 'text',
      value: '',
      key: 'option2',
      span: 5,
      placeholder: 'B. Enter option here...',
      rules: {
        required: 'Option2 Name is Required'
      }
    },
    {
      label: '',
      type: 'text',
      value: '',
      key: 'option3',
      span: 5,
      placeholder: 'C. Enter option here...',
      rules: {
        required: 'Option3 Name is Required'
      }
    },
    {
      label: '',
      type: 'text',
      value: '',
      key: 'option4',
      span: 5,
      placeholder: 'D. Enter option here...',
      rules: {
        required: 'Option4 Name is Required'
      }
    }
  ]
  return controls
}
export default questionControl
