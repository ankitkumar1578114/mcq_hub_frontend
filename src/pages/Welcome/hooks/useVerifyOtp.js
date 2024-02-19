import useRequest from '../../../common/hooks/useRequest'
import useAuth from '../../Navigation/hooks/useAuth'

const useVerifyOtp = ({setCurrentState,setUser, setUserLoaded}) => {
  const { data, loading, trigger } = useRequest({
    url: 'user/verify_otp',
    method: 'post',
    isConfig: true
  })

  const {responseMessage} = useAuth({setUser,setUserLoaded})
  const verifyOtp = async (data) => {
    const res = await trigger({
      ...data
    })

    localStorage.setItem('token', res?.data?.jwt_token) 
    console.log(res)
    responseMessage({credential:res?.data?.jwt_token})
    setCurrentState(2)
  }
  return {
    data,
    loading,
    verifyOtp
  }
}
export default useVerifyOtp
