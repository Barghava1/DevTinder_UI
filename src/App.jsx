import { BrowserRouter, Routes,Route} from "react-router-dom"
import Login from "./login"
import Body from "./Body"
import Profile from "./profile"
function App() {


  return (
    <>
     <BrowserRouter basename="/">
     <Routes>
      <Route path="/" element={<Body/>}>
         <Route path="/profile" element={<Profile/>}/>
         <Route path="/login" element={<Login/>}/>

         
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
