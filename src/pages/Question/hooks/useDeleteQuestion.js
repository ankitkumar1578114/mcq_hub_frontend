import useRequest from '../../../common/hooks/useRequest'

const useDeleteQuestion = ({ listQuestions = () => {} }) => {
  const { data, loading, trigger } = useRequest({
    url: 'question/update_question',
    method: 'put',
    isConfig: true
  })
  const deleteQuestion = async ({ id }) => {
    await trigger({
      set: {
        status: 'inactive'
      },
      where: {
        id
      }
    })
    await listQuestions()
  }
  return {
    data,
    loading,
    deleteQuestion
  }
}
export default useDeleteQuestion
