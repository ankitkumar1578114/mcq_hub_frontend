import Table from "../Components/Table";
import useListUsers from "./hooks/useListUsers";
import { userTableColumns } from "./user-table-columns";

const UserPage = () =>{
    const {data} = useListUsers();
    console.log(data)
    return <>
        <Table columns={userTableColumns()} data={data} thStyle={{ textAlign: 'left' }} tdStyle={{ textAlign: 'left' }}/>
    </>   
}
export default UserPage;