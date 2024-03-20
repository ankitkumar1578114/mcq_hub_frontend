import { useForm } from 'react-hook-form'
import Layout from '../Components/Layout'
import questionControl from './utils/create-question'
import useCreateQuestion from './hooks/useCreateQuestion'
import useListQuestions from './hooks/useListQuestions'
import Table from '../Components/Table'
import { questionTableColumns } from './utils/question-table-columns'
import Tabs from '../Components/Tabs'
import { useState } from 'react'
import Options from './Options'
import styles from './styles.module.css'
import useDeleteQuestion from './hooks/useDeleteQuestion'
import Tags from './Tags'
import Button from '../Components/Button'

const Question = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [selectedOption, setSelectedOption] = useState()

  const controls = questionControl()
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm()
  const [filterTags,setFilterTags] = useState([])
  const { data, listQuestions, total, setPage, page } = useListQuestions({ activeTab , filterTags })
  const [tags, setTags] = useState([])
  const { createQuestion } = useCreateQuestion({ reset, listQuestions, selectedOption, setSelectedOption, tags })
  const { deleteQuestion } = useDeleteQuestion({ listQuestions })
  return <>
              <div>
                     <div className={styles.question_prep_table}>
                            <Tags tags={tags} setTags={setTags}/>
                            <Layout register={register} handleSubmit={handleSubmit} onSubmit={createQuestion} controls={controls} errors={errors}/>
                            <Options selectedOption={selectedOption} setSelectedOption={setSelectedOption} watch={watch}/>
                     </div>
                     <div className={styles.questions_table}>
                            <div className={styles.flex_space_between}>
                                   <div>
                                          <Tags tags={filterTags} setTags={setFilterTags}/>
                                   </div>
                                   <div className={styles.flex}>
                                          {
                                                 page !== 0 ?
                                                 <Button value = "Prev" type='secondary' onClick={()=>setPage(page-1)} />
                                                 : null
                                          }
                                          <Button value = "Next" onClick={()=>setPage(page+1)}/>
                                   </div>
                            </div>

                            <Tabs active={activeTab} onChange={(index) => setActiveTab(index)} tabs={[`All Questions (${total})`, 'My Questions']} ></Tabs>
                                   <div style={{ marginTop: '4px' }}>
                                          <Table columns={questionTableColumns({ deleteQuestion })} data={data} thStyle={{ textAlign: 'left' }} tdStyle={{ textAlign: 'left' }}/>
                                   </div>
                     </div>
              </div>
         </>
}
export default Question
