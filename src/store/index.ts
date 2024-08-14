import { configureStore } from "@reduxjs/toolkit"
import { usersSlice } from "./users/slice"

export const store = configureStore({
    reducer: {
        user: usersSlice.reducer
    },
})