import { deleteUserById, User, UserId, addNewUser } from "../store/users/slice"
import { useAppDispatch, useAppSelector } from "./store"


export function useUserActions() {
    const users = useAppSelector((state) => state.users)
    const dispatch = useAppDispatch()

    const handleDeleteUser = (id: UserId) => {
      dispatch(deleteUserById(id))
    }

    const addUser = ({name, email, github}:User) => {
      dispatch(addNewUser({ name, email, github }))
    }

    
  return {
    users,
    addUser,
    handleDeleteUser,
  }
}
