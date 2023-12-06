import useRequest from '../../../common/hooks/useRequest'

const useCreateQuestion = ({ reset = () => {}, listQuestions = () => {}, selectedOption, setSelectedOption = () => {}, tags = [] }) => {
  const { data, loading, trigger } = useRequest({
    url: 'question/create_question',
    method: 'post',
    isConfig: true
  })
  const createQuestion = async (data) => {
    if (!selectedOption && selectedOption !== 0) {
      alert('Please select Answer first')
      return
    }
    console.log(tags)
    await trigger({
      ...data,
      tags,
      answer: selectedOption,
      created_by: 0
    })
    await reset({
      title: '',
      option1: '',
      option2: '',
      option3: '',
      option4: ''
    })
    setSelectedOption('')
    await listQuestions()
  }
  return {
    data,
    loading,
    createQuestion
  }
}
export default useCreateQuestion
