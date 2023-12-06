import { useEffect } from 'react'
import useRequest from '../../../common/hooks/useRequest'
const useListTags = () => {
  const { data, loading, trigger } = useRequest({
    url: 'tag/list_tags',
    method: 'get',
    isConfig: true
  })

  const listTags = async () => {
    const payload = {
      filters: {
      }
    }
    trigger(payload)
  }

  useEffect(() => {
    listTags()
  }, [])
  return {
    loading,
    data: data?.data,
    total: data?.total,
    options: data?.data,
    listTags
  }
}
export default useListTags
