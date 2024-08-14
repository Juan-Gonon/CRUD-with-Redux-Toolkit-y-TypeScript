import { Button, Card, TextInput, Title } from "@tremor/react"

export function CreateNewUser() {
  return (
    <Card>
        <Title>Create new User</Title>
        <form action="">
            <TextInput placeholder="Aquí el nombre" />
            <TextInput placeholder="Aquí el email" />
            <TextInput placeholder="Aquí el usuario de Github" />
        </form>
        <div>
            <Button  type="submit"  >
                Crear usuario
            </Button>
        </div>
    </Card>
  )
}
