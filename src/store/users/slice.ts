import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const DEFAULT_STATE = [
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

export type UserId = string;

export interface User{
    name: string,
    email: string,
    github: string
}

export interface UserWithId extends User{
    id: UserId
}

const initialState: UserWithId[] = (() => {
    const persistedState = localStorage.getItem('__redux__state__')
    if(persistedState){
        return JSON.parse(persistedState).users
    }

    return DEFAULT_STATE
})()

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        addNewUser: (state, action:PayloadAction<User>) => {
            const id = crypto.randomUUID()
            return [...state, { id, ...action.payload }]
        },
       deleteUserById: (state, action: PayloadAction<UserId>) => {
        const id = action.payload
        return state.filter((user) => user.id !== id)

       },
       rollbackUser: (state, action:PayloadAction<UserWithId>) => {
        const isUserAlreadyDefined = state.some((user) => user.id === action.payload.id )

        if( !isUserAlreadyDefined ){
            return [...state, action.payload]
        }
       }
    }
})

export const { deleteUserById, addNewUser, rollbackUser } = usersSlice.actions