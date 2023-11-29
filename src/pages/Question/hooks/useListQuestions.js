import { useEffect } from 'react'
import useRequest from '../../../common/hooks/useRequest'
const useListQuestions = ({ activeTab }) => {
  const { data, loading, trigger } = useRequest({
    url: 'question/list_questions',
    method: 'post',
    isConfig: true
  })

  const listQuestions = async () => {
    const payload = {
      filters: {
        created_by: activeTab === 1 ? 0 : undefined
      }
    }
    trigger(payload)
  }

  useEffect(() => {
    listQuestions()
  }, [activeTab])
  return {
    loading,
    data: data?.data,
    options: data?.data,
    listQuestions
  }
}
export default useListQuestions
