// import React, { useState } from 'react'
// import axios from 'axios'
// import './Doctor.css'
// function NewReg() {
//     const[userID,setUserID]=useState('')
//     const[password,setPassword]=useState('')
//     const[userType,setUserType]=useState('')
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         let obj={"userId":userID,"password":password,"loginStatus":0,"userType":userType}
//       console.log(obj)
//          axios.post('http://localhost:8056/admin/registerUser',obj).then(rej=>(alert("User is added")))
           
//            }
//   return (
//     <div>
//       <div className='g'>
//         <div className='h'>
//       <h1>Register page</h1>
//       <form onSubmit={handleSubmit}>
//         Enter userID : <input type='text' value={userID} onChange={(e)=>{setUserID(e.target.value)}}/><br/>
//         Enter password : <input type='text' value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
//         Enter userType : <input type='text' value={userType} onChange={(e)=>{setUserType(e.target.value)}}/><br/>
//         <button>Register</button>
//       </form>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default NewReg;




// import React, { useState } from 'react'
// import axios from 'axios'
// import './NewReg.css'

// function NewReg() {
//   const [userID, setUserID] = useState('')
//   const [password, setPassword] = useState('')
//   const [userType, setUserType] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const obj = {"userId": userID, "password": password, "loginStatus": 0, "userType": userType}
//     console.log(obj)
//     axios.post('http://localhost:8056/admin/registerUser', obj).then(rej => (alert("User is added")))
//   }

//   return (
//     <div className="container">
//       <div className="form">
//         <h1>Register page</h1>
//         <br></br>
//         <form onSubmit={handleSubmit}>
//           Enter userID : <input type='text' value={userID} onChange={(e)=>{setUserID(e.target.value)}}/><br/>
//           Enter password : <input type='text' value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
//           Enter userType : <input type='text' value={userType} onChange={(e)=>{setUserType(e.target.value)}}/><br/>
//           <button>Register</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default NewReg;
