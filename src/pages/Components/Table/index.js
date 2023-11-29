import styles from './styles.module.css'
import Skelton from '../Skelton'
const Table = ({ columns, data, loading, thStyle = {}, tdStyle = {} }) => {
  if (loading) {
    return <>
            <Skelton width="100%" height="300px"/>
        </>
  } else {
    return <>
            {
            data?.length >= 1
              ? <>
                <table className={styles.table}>
                <tr className={styles.tr}>
                    {
                        columns?.map((column) => (
                            <th className={styles.th} style={thStyle} key={column?.key}>{column?.header}</th>
                        ))
                    }
                </tr>

                {
                    data?.map((item, index) => (
                        <tr className={styles.tr} key={index}>
                            {
                                columns?.map((column) => (
                                    <td className={styles.td} style={tdStyle} key={column?.key}>
                                        {
                                            (typeof (column?.accessor) === 'string')
                                              ? (item[column?.accessor] || index + 1)
                                              : column?.accessor(item)
                                        }
                                    </td>
                                ))
                            }
                        </tr>
                    )
                    )
                }

            </table>
        </>
              : <div className={styles.no_data_found}>
                    No Data Found
                </div>
        }
    </>
  }
}
export default Table
