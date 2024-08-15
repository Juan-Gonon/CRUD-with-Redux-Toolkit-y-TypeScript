import './App.css'
import { ListOfUser } from './components/ListOfUser'
import { CreateNewUser } from './components/CreateNewUser'
import { Toaster } from 'sonner'

function App() {

  return (
    <>
    <ListOfUser/>
    <CreateNewUser />
    <Toaster richColors />
    </>
  )
}

export default App
