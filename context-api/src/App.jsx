import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {

  {/* <    UserContext.provider value{{}}/>  */ }
  return (
    <UserContextProvider >
    < h1 > Context API</h1 >
    <Login/>
    <Profile/>
    </UserContextProvider >

  )
}

export default App
