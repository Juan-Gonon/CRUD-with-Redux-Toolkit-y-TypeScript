import { Button, Card, TextInput, Title, Badge } from "@tremor/react"
import { useState } from "react"
import { useUserActions } from "../hook/useUserActions"

export function CreateNewUser() {

    const { addUser } = useUserActions()
    const [result, setResult] = useState<'ok' | 'ko' | null >(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setResult(null)
        e.preventDefault() 
        const form = e.currentTarget
        const formData = new FormData(form)
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const github = formData.get('github') as string

        if(!name || !email || !github ){
            return setResult('ko')
        }

        addUser({ name, email, github})
        setResult('ok')
        form.reset()
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
                <span>
                    { result === 'ok' && <Badge color='green'> Guardado correctamente </Badge>}
                    { result === 'ko' && <Badge color='red'> Error con los campos </Badge> }
                </span>
            </div>
        </form>
    </Card>
  )
}
