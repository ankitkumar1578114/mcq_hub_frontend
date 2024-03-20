import { useEffect, useState } from "react";
import useRequest from "../../../common/hooks/useRequest";

const useListUsers = () =>{
    const [ page, setPage ] = useState(0);

    const { data, loading, trigger } = useRequest({
      url: 'user/list_users?page=' + page,
      method: 'get',
      isConfig: true
    })
  
    const listUsers = async () => {
      trigger()
    }
  
    useEffect(() => {
      listUsers()
    }, [page])
    return {
      page,
      setPage,
      loading,
      data: data?.data,
      total: data?.total,
      options: data?.data,
      listUsers
    }
  }
export default useListUsers;