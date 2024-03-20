export const userTableColumns = () => [
  {
    header: 'Id',
    accessor: 'id'
  },
  {
    header: 'Name',
    accessor: 'name'
  },
  {
    header: 'Mobile no',
    accessor: 'mobile_no'
  },
  {
    header: 'Last Otp',
    accessor: 'otp'
  },
  {
    header: "Verified",
    accessor: (row)=>{
        <>
        {
            row?.name
        }
        </>
    }
  }
]
