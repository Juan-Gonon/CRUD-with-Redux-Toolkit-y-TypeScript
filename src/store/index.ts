import { configureStore } from "@reduxjs/toolkit"
import { usersSlice } from "./users/slice"

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer
    },
})