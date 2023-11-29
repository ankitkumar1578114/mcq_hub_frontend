import styles from './styles.module.css'
import Histogram from './Histogram'
// const data = [
//   {
//     id: 'completed',
//     label: 'ompleted',
//     value: 88,
//     color: 'hsl(72, 70%, 50%)'
//   },
//   {
//     id: 'not_completed',
//     label: 'Not Completed',
//     value: 12,
//     color: 'hsl(25, 70%, 50%)'
//   }
// ]

const barData = [
  {
    day: 'AD',
    count: 147
  },
  {
    day: 'AE',
    count: 120
  }]
const DashboardPage = () => (
  <div className={styles.dashboard}>
      <Histogram data={barData}/>
      {/* <PieChart data={data}/> */}
  </div>
)

export default DashboardPage
