import { Routes , Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar";
import User from "./pages/User";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () =>{
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element= {<About/>} />
        <Route path="/contact" element={<Contact/>} />

        <Route path="/User" element={<User/>} />
        <Route path="/User/:id" element={<User />} />     {/* for useParams */}

        <Route path="/Login" element={<Login />} />

        {/* <Route path="/Dashboard" element={<Dashboard />} /> */}

        <Route path="/Dashboard" 
          element={
            <ProtectedRoute>                  {/* must be wrapped around which file you want to protect the sensitive content */}
              <Dashboard />
            </ProtectedRoute>
          } />
      </Routes>
    </>
  )
}
export default App;