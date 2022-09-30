import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext.jsx'
import { toast } from 'react-toastify';


const AddUser = () => {



    const [user, setUser] = useState({
        email: "",
        password: "",
    


    })
    const [alert, setAlert] = useState({
        display: false,
        message: "Im your alert"


    })






    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    const { addUser } = useContext(UserContext)


    const submitForm = () => {




        if (user.name && user.age && user.phone && user.uploadProfileImage
        ) {


            if (user.name.length <= 3) {

                setAlert({ message: 'Name should be more then 3', display: true })
            }
            else if (user.age > 200) {


                setAlert({ message: 'Enter a valid age', display: true })


            }

            else {



                const response = addUser(user.name, user.age, user.phone, user.uploadProfileImage)

                setUser({
                    name: "",
                    age: "",
                    phone: "",
                    uploadProfileImage: ""
                })


                toast.success("User Added successfully", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });





                navigate('/')




            }


        } else {


            setAlert({ message: 'Please Fill All Fields', display: true })


        }









    }



    const navigate = useNavigate()

    const handleCancel = () => {

        navigate('/')

    }


    const handleRegister=()=>{
navigate('/register')
    }






    const handleImageChange = (e) => {


        setUser({ ...user, uploadProfileImage: e.target.files[0] })




    }

    return (


        <>



            <div >

                <div className={`py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0  `} id="modal">




                    <div class={`bg-red-100 border mb-5 mx-auto w-11/12 md:w-2/3 max-w-lg border-red-400 text-red-700 px-4 py-3 rounded relative ${!alert.display ? 'hidden' : ''}`} role="alert">
                        <strong class="font-bold">{alert.message}</strong>
                        {/* <span class="block sm:inline">Something seriously bad happened.</span> */}
                        <span class="absolute top-0 bottom-0 right-0 px-4 py-3"

                            onClick={() => setAlert({ ...alert, display: false })}
                        >
                            <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                        </span>
                    </div>







                    <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                            <div>
                                <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 mb-10">Sign in to your account</h2>
                             
                            </div>

                          
                            <input id="email" className="pmb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Email or UserName" value={user.email} onChange={onChange} name='email' />






                            {/* <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Age</label> */}
                            <input type='password' id="password" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Password" value={user.password} onChange={onChange} name='password' />











                            <div className="flex items-center justify-start w-full">
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm" onClick={submitForm}>Sign-in</button>
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onClick={handleRegister}>Register</button>
                            </div>
                            <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onClick={handleCancel} aria-label="close modal" role="button">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>


        </>



    )
}

export default AddUser