import { configureStore, type Middleware, type PayloadAction } from "@reduxjs/toolkit"
import { UserId, usersSlice } from "./users/slice"
import { toast } from "sonner"

const persistenceLocalStorageMiddleware:Middleware = (store) => (next) => (action) => {
    next(action)
    localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
}

const syncWithDatabase:Middleware = store => next => action => {
    const { type, payload } = action as PayloadAction<UserId>

    next(action)
    if(type === 'users/deleteUserById'){
        fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
            method: 'DELETE'
        })
        .then((res) => {
            if(res.ok){
                toast.success(`Usuario ${payload} eliminado correctamente`)
            }
        })
        .catch((error) => {
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