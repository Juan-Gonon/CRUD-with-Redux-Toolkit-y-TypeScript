import { configureStore, type Middleware, type PayloadAction } from "@reduxjs/toolkit"
import { rollbackUser, UserId, usersSlice, UserWithId } from "./users/slice"
import { toast } from "sonner"

const persistenceLocalStorageMiddleware:Middleware = (store) => (next) => (action) => {
    next(action)
    localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
}

const syncWithDatabase:Middleware = store => next => action => {
    const { type, payload } = action as PayloadAction<UserId>
    const userIdToRemove = payload
    const previousState = store.getState()

    next(action)

    if(type === 'users/deleteUserById'){
        const userToRemove = previousState.users.find((user:UserWithId) => user.id === userIdToRemove )

        fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
            method: 'DELETE'
        })
        .then((res) => {
            if(res.ok){
                toast.success(`Usuario ${userIdToRemove} eliminado correctamente`)
            }

            throw new Error('Error al eliminar el usuario')
        })
        .catch((error) => {
            toast.success(`Error deleting user ${userIdToRemove}`)
            if( userToRemove ) store.dispatch(rollbackUser(userToRemove))
            console.log(error)
        })

    }
}
export const store = configureStore({
    reducer: {
        users: usersSlice.reducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(persistenceLocalStorageMiddleware, syncWithDatabase)
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch