import { useEffect } from 'react'
import useRequest from '../../../common/hooks/useRequest'

const useGetDashboard = () => {
  const { data, loading, trigger } = useRequest({
    url: 'dashboard/get_dashboard',
    method: 'get',
    isConfig: true
  })

  const getDashboard = async () => {
    const payload = {
      filters: {
      }
    }
    trigger(payload)
  }

  useEffect(() => {
    getDashboard()
  }, [])
  return {
    loading,
    data,
    getDashboard
  }
}
export default useGetDashboard
