import React,{useState} from 'react'

import { UserProvider } from './context';
import HomePage from './homepageclass';
import HomePage1 from './homepagefunction'

function App() {
  const user = { name: 'Tania', loggedIn: "trsdadsdsasaue" }
 const [state,setState]=useState(user)

  // Method to update state
  const setUser = (user) => {
    setState((prevState) => (user ))
  }
  return (
    <UserProvider value={{state,setUser}}>
      <HomePage />
      <HomePage1 />
    </UserProvider>
  )
}
export default App