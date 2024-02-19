const sendOtpControls = () => {
  const controls = [
    {
      label: 'Mobile No *',
      type: 'text',
      value: '',
      key: 'mobile_no',
      span: 12,
      rules: {
        required: 'Mobile No is Required',
        placeholder: 'Enter Mobile No'
      }
    }
  ]
  return controls
}
export default sendOtpControls
