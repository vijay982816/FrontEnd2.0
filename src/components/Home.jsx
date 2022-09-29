
// import { useEffect } from "react"
// import { useContext } from "react"
// import { Link } from "react-router-dom"
// import UserContext from "../context/UserContext.jsx"
// import User from "./User.jsx"
// import FileBase64 from 'react-file-base64'; 3

// import { toast, ToastContainer } from 'react-toastify';

// const Home = () => {




//     const { getUsers, users } = useContext(UserContext)

//     useEffect(() => {


//         getUsers()


//     }, [])




//     function base64String(buffer) {
//         var binary = '';
//         var bytes = new Uint8Array(buffer);
//         var len = bytes.byteLength;
//         for (var i = 0; i < len; i++) {
//             binary += String.fromCharCode(bytes[i]);
//         }
//         return window.btoa(binary);
//     }


//     return (
//         <>


//             <div className="antialiased font-sans bg-gray-200">
//                 <div className="container mx-auto px-4 sm:px-8">


//                     <div className="py-8 lg:px-60">
//                         <div>
//                             <h2 className="text-2xl font-semibold leading-tight">Users</h2>
//                         </div>

//                         <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
//                             <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
//                                 <table className="min-w-full leading-normal">
//                                     <thead>
//                                         <tr>
//                                             <th
//                                                 className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                                                 User
//                                             </th>
//                                             <th
//                                                 className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                                                 Age
//                                             </th>

//                                             <th
//                                                 className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                                                 Action
//                                             </th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>


//                                         {users.map((element) => {




//                                             let base64str = base64String(element.profileImage.data.data)

//                                             // const base64String = btoa(
//                                             //     String.fromCharCode(...new Uint8Array(element.profileImage.data.data))
//                                             // );









//                                             return <User key={element._id} id={element._id} imgUrl={`data:${element.profileImage.contentType};base64,${base64str}`} name={element.name} age={element.age} />
//                                         }






//                                         )}

//                                     </tbody>
//                                 </table>


//                                 <div
//                                     className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">

//                                     <div className="inline-flex mt-2 xs:mt-0">
//                                         <button
//                                             className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">



//                                             <Link to="/adduser">Add User</Link>


//                                         </button>





//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>








//         </>


//     )
// }

// export default Home;









import { useEffect } from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../context/UserContext.jsx"
import User from "./User.jsx"
import FileBase64 from 'react-file-base64'; 3

import { toast, ToastContainer } from 'react-toastify';

const Home = () => {




    // const { getUsers, users } = useContext(UserContext)

    // useEffect(() => {


    //     getUsers()


    // }, [])






    return (
        <>




            <header class="text-gray-600 body-font bg-gray-100">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span class="ml-3 text-xl">Tailblocks</span>
                    </a>






                    <div className="md:ml-a uto">

                        <button class="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                            Login
                        </button>

                        <button class="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                            Register
                        </button>

                    </div>
                </div>
            </header>





        </>


    )
}

export default Home;
