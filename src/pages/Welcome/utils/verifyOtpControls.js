const verifyOtpControls = ({mobile_no}) => {
  const controls = [
      {
        label: 'Mobile No *',
        type: 'text',
        value: mobile_no,
        key: 'mobile_no',
        disabled:true,
        span: 12,
        rules: {
          required: 'Mobile No is Required',
          placeholder: 'Enter Mobile No'
        }
      },
      {
        label: 'Otp',
        type: 'text',
        value: '',
        key: 'otp',
        span: 12,
        rules: {
          required: 'OTP is Required',
          placeholder: 'Enter OTP'
        }
      },
    ]
    return controls
  }
  export default verifyOtpControls
  