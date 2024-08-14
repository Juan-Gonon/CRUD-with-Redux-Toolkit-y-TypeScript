import { deleteUserById, UserId } from "../store/users/slice"
import { useAppDispatch, useAppSelector } from "./store"


export function useUserActions() {
    const users = useAppSelector((state) => state.users)
    const dispatch = useAppDispatch()

    const handleDeleteUser = (id: UserId) => {
      dispatch(deleteUserById(id))
    }

    
  return {
    users,
    handleDeleteUser
  }
}
