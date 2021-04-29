



import React, { Component } from 'react'
// import UserContext from './context'

// class Homepage extends Component {
//     state={
//         name:"",
//         loggedIn:""
//     }
//     static contextType = UserContext
//     componentDidMount() {
//         const {user} = this.context
    
//         console.log(user,"dsads") // { name: 'Tania', loggedIn: true }
//         this.setState({...this.state,name:user.name,loggedIn:user.loggedIn})
//       }
//   render() {
    

   
//     return <>
//     <div>{this.state.name}</div>
//     <div>{this.state.loggedIn}</div>
  
//    </>
//   }
// }
// export default Homepage



// class comp send back data now




// import React, { Component } from 'react'
// import UserContext from './context'

// class Homepage extends Component {
//   static contextType = UserContext

//   render() {
//     const { state, setUser } = this.context

//     return (
//       <div>
//         <button
//           onClick={() => {
//             const newUser = { name: 'Joe', loggedIn: true }

//             setUser(newUser)
//           }}
//         >
//           Update User
//         </button>
//         <p>{`Current User: ${state.name}`}</p>
//       </div>
//     )
//   }
// }
// export default Homepage




// usig consumer

// import { UserConsumer } from './context'

// class Homepage extends Component {
//   render() {
//     return (
//       <>
//       <UserConsumer>
//         {(props) => {
//           return <div>{props.name}  and {props.loggedIn}</div>
//         }}
//       </UserConsumer>
//       <button>updte</button>
//       </>
//     )
//   }
// }
// export default Homepage




// useing consumer to senddata
import { UserConsumer } from './context'

class Homepage extends Component {
  render() {
    return (
      <>
      <UserConsumer>
        {(props) => {
          return <><div>{props.state.name}  and {props.state.loggedIn}</div>
          <button
          onClick={() => {
            const newUser = { name: 'Joe', loggedIn: 'dsassadasaddsa' }
 
             props.setUser(newUser)           }}
        >update</button>
          </>
        }}
      
      </UserConsumer>
     
     
      </>
    )
  }
}
export default Homepage