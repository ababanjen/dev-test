import { create } from "zustand"
import { shallow } from "zustand/shallow"

const userStore = create((set) => ({
  users: null,
  setUsers: (data: any) => set(() => ({ users: data }))
}))

const useUserStore = (callback: (state: any) => any) => userStore(callback, shallow)

export default useUserStore