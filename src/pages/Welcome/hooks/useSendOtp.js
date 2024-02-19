import useRequest from '../../../common/hooks/useRequest'

const useSendOtp = ({ setCurrentState }) => {
  const { data, loading, trigger } = useRequest({
    url: 'user/send_otp',
    method: 'post',
    isConfig: true
  })
  const sendOtp = async (data) => {
    await trigger({
      ...data
    })
    setCurrentState(1)
  }
  return {
    data,
    loading,
    sendOtp
  }
}
export default useSendOtp
