import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export type UserId = string;

export interface User{
    name: string,
    email: string,
    github: string
}

export interface UserWithId extends User{
    id: UserId
}

const initialState: UserWithId[] = [
    {
        id: '1',
        name: 'yazmanito',
        email: 'yazmanito@gmail.com',
        github: 'yazmanito'
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'hane@gmail.com',
        github: 'Smith'
    },
    {
        id: '3',
        name: 'David Clark',
        email: 'david@gmail.com',
        github: 'david'
    },
    {
        id: '4',
        name: 'Mike Johnson',
        email: 'mike@gmail.com',
        github: 'Mike Johnson'
    }
]

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
       deleteUserById: (state, action: PayloadAction<UserId>) => {
        const id = action.payload
        return state.filter((user) => user.id !== id)

       }
    }
})

export const { deleteUserById } = usersSlice.actions