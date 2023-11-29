import styles from './styles.module.css'
import IconSuccess from '../../Components/Icons/IconSuccess'
import Button from '../../Components/Button'

export const questionTableColumns = ({ deleteQuestion = () => {} }) => [
  {
    header: 'Id',
    accessor: 'id'
  },
  {
    header: 'Question',
    accessor: 'title'
  },
  ...[1, 2, 3, 4]?.map((option, index) => {
    return {
      header: `Option${option}`,
      accessor: (row) => (
                <div className={styles.column}>
                    {
                        row?.answer === index
                          ? <IconSuccess/>
                          : null
                    }
                    {row?.[`option${option}`]}
                </div>
      )

    }
  }),
  {
    header: '',
    accessor: (row) => (
        <div className={styles.column}>
            <Button value="Update" type="secondary" />
            <Button value="Delete" type="tirtiary" onClick={() => deleteQuestion({ id: row?.id })}/>
        </div>
    )
  }

]
