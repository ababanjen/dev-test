import { useEffect } from "react"
import { getUsers } from "@/helpers/request/users"
import useUserStore from "@/helpers/store/user";
import UserList from "@/components/UserList";

const Users = () => {
  const { setUsers } = useUserStore(state => state)

  useEffect(() => {
    getUsers().then(res => {
      setUsers(res)
    })
  }, [])

  return (
    <div className="flex flex-col gap-4 w-full p-6">
      <span className="capitalize text-xl border-b font-semibold">user list:</span>
      <div className="overflow-auto max-h-[40rem]">
        <UserList />
      </div>
    </div>
  )
}

export default Users