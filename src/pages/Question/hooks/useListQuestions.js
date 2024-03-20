import { useEffect, useState } from 'react'
import useRequest from '../../../common/hooks/useRequest'
const useListQuestions = ({ activeTab, filterTags }) => {

  const [ page, setPage ] = useState(0);

  const { data, loading, trigger } = useRequest({
    url: 'question/list_questions?page=' + page + '&filterTags='+JSON.stringify(filterTags),
    method: 'get',
    isConfig: true
  })

  const listQuestions = async () => {
    const payload = {
      filters: {
        created_by: activeTab === 1 ? 0 : undefined,
      },
    }
    trigger(payload)
  }

  useEffect(() => {
    listQuestions()
  }, [activeTab, page, JSON.stringify(filterTags)])
  return {
    page,
    setPage,
    loading,
    data: data?.data,
    total: data?.total,
    options: data?.data,
    listQuestions
  }
}
export default useListQuestions
