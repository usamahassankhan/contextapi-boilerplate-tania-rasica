import React, { useContext } from 'react'
import UserContext from './context'

 const Homepage = () => {
  const user = useContext(UserContext)

  return <div>{user.name}</div>
}
export  default Homepage