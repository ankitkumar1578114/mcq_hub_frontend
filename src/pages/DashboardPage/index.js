import styles from './styles.module.css'
import Histogram from './Histogram'
import Block from './Block'
import useGetDashboard from './hooks/useGetDashboard'
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
const DashboardPage = () => {
  const {data} = useGetDashboard();
  console.log(data)
    return (
    <div className={styles.dashboard}>
        {/* <Histogram data={barData}/> */}
        <div className={styles.flex}>
          <Block number={data?.totalAttempts} title="Total Attempts" index={0}/>
          <Block number={data?.totalUsers} title="Total Active Users" index={1} />
          <Block number={data?.todaysTotalAttempts} title="Today's Total Attempts" index={2} />
          <Block number={data?.todaysActiveUsers} title="Active User Today" index={3} />
        </div>
        {/* <PieChart data={data}/> */}
    </div>
  )
}
export default DashboardPage
