import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import AddUser from './components/AddUser.jsx';
import Home from './components/Home.jsx';
import UpdateUser from './components/UpdateUser.jsx';
import ViewProfile from './components/ViewProfile.jsx';
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer} from "react-toastify";



export default function App() {


  return (
    <>



      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />


      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/adduser" element={<AddUser />} />

        <  Route path="/updateuser/:id" element={<UpdateUser />} />

        <  Route path="/view/:id" element={<ViewProfile />} />
      
      





      </Routes>

    </>

  )
}