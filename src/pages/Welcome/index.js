import { useForm } from 'react-hook-form'
import Layout from '../Components/Layout'
import styles from './styles.module.css'
import useSendOtp from './hooks/useSendOtp'
import sendOtpControls from './utils/sendOtpControls'
import { useState } from 'react'
import VerifyOtp from './VerifyOtp'
import { Navigate } from 'react-router-dom'
const Welcome = ({setUser, setUserLoaded}) => {
  const { register, handleSubmit, formState: { errors },watch } = useForm()
  const [currentState, setCurrentState] = useState(0)
  const { sendOtp } = useSendOtp({ setCurrentState })

  return <>
      <div className = {styles.parent}>
        <div className={styles.flex}>
          {{
            0: <Layout register={register} handleSubmit={handleSubmit} onSubmit={sendOtp} controls={sendOtpControls()} errors={errors}/>,
            1: <VerifyOtp setCurrentState={setCurrentState} mobile_no={watch('mobile_no')} setUser={setUser} setUserLoaded={setUserLoaded}/>,
            2: "Verified"
          }[currentState]}
        </div>
      </div>
    </>
}
export default Welcome
