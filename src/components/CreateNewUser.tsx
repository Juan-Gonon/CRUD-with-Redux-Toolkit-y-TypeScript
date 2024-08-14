import { Button, Card, TextInput, Title } from "@tremor/react"
import React from "react"
import { useUserActions } from "../hook/useUserActions"

export function CreateNewUser() {

    const { addUser } = useUserActions()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() 
        const form = e.currentTarget
        const formData = new FormData(form)
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const github = formData.get('github') as string

        addUser({ name, email, github})
    }
    
  return (
    <Card>
        <Title>Create new User</Title>
        <form onSubmit={handleSubmit}>
            <TextInput placeholder="Aquí el nombre" name="name" />
            <TextInput placeholder="Aquí el email" name="email" />
            <TextInput placeholder="Aquí el usuario de Github" name="github" />

            <div>
                <Button  type="submit"  >
                    Crear usuario
                </Button>
            </div>
        </form>
    </Card>
  )
}
