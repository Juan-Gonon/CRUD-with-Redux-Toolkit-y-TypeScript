import { configureStore } from "@reduxjs/toolkit"
import { usersSlice } from "./users/slice"

const persistenceLocalStorageMiddleware = (store) => (next) => (action) => {
    console.log(store.getState())
    console.log(action)
    next(action)
    console.log(store.getState())
}

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer
    },
   middleware(getDefaultMiddleware) {
       return getDefaultMiddleware().concat(persistenceLocalStorageMiddleware)
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch