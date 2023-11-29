import styles from './styles.module.css'
const Options = ({ selectedOption, setSelectedOption = () => {}, watch = () => {} }) => {
  const option = {
    option1: watch('option1'),
    option2: watch('option2'),
    option3: watch('option3'),
    option4: watch('option4')
  }

  return <>
  <div className={styles.options}>
    {
        Object.values(option)?.map((option, index) =>
          (
            <div key={index} className={selectedOption === index && option ? styles.selected_option : styles.option} onClick={() => option !== '' && setSelectedOption(index)}>
                {`${String.fromCharCode(65 + index)}. ${option}` || 'Please Enter Option First!'}
            </div>
          ))
    }

  </div>
    </>
}
export default Options
