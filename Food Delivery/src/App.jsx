import React from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import SignUp from "./pages/Signup"
import Login from "./pages/Login"
import Homepage from "./pages/Homepage"
import Cart from "./pages/Cart"
import Offers from "./pages/Offers"
import ItemDetails from "./pages/ItemDetails"


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
        <Route path="/:categoryName/:itemName" element={<ItemDetails/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login"  element={<Login/>}></Route>
        <Route path="/cart"  element={<Cart/>}></Route>
        <Route path="/offers"  element={<Offers/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
    )
}

export default App
