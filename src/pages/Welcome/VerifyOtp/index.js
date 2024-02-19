import { useForm } from 'react-hook-form'
import {useEffect} from 'react'
import Layout from '../../Components/Layout'
import useVerifyOtp from '../hooks/useVerifyOtp'
import verifyOtpControls from '../utils/verifyOtpControls'

const VerifyOtp = ({setCurrentState,mobile_no,setUser, setUserLoaded}) => {
  const { register, handleSubmit, formState: { errors } ,setValue} = useForm()
  const { verifyOtp } = useVerifyOtp({setCurrentState,setUser,setUserLoaded})
 
  useEffect(()=>{
    setValue('mobile_no',mobile_no)
  },[mobile_no])
 
 return <>
      <Layout register={register} handleSubmit={handleSubmit} onSubmit={verifyOtp} controls={verifyOtpControls({mobile_no})} errors={errors}/>
  </>
}
export default VerifyOtp
