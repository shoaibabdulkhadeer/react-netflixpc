import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import SignIn from "./Routes/SignIn";
import Signup from "./Routes/Signup";


function App() {
  return (
    <>
      <Navbar />
       <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/signin" element={<SignIn />} />
         <Route path="/signup" element={<Signup />} />
       </Routes>
      
    </>
  );
}

export default App;
