import React from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import SignUp from "./pages/Signup"
import Login from "./pages/Login"
import Homepage from "./pages/Homepage"


function App() {

  // const [backendData,setBackendData] = useState([])

  // useEffect(()=>{
  //   axios.get('/api')
  //   .then((response)=>{
  //     setBackendData((response.data))
  //   })
  //   .catch((error)=>{
  //     console.log(error) 
  //   })
  // })
  
  return (
    <>
    {/* <h1>All Names</h1>
    <p>person: {backendData.length}</p>
  
      {backendData.map((item,index)=>(
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.content}</p>
        </div>
      ))
      } */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login"  element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
    )
}

export default App
