import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyContext from '../../context/data/myContext'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, fireDB } from '../../firebase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import Loader from '../../components/loader/Loader'

import siginup from "../../assets/img/siginup.svg"

function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')

    // error
    const [nameError, setNameError] = useState("");


    const context = useContext(MyContext);
    const { loading, setLoading } = context;

    const navigate = useNavigate()

    const signup = async () => {
        setLoading(true)
        if (name === "" || password == "" || email === "" || address === "" || phone === "" || gender === "" || age === "") {
            setLoading(false)
            return toast.error('All fields are required');
        }

        // errors
        if (name.length < 5) {
            setLoading(false);
            setNameError('Name must be at least 5 characters');
            return;
        } else {
            setNameError(""); 
        }
        
      

        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);
            // console.log(users);
            // savein database
            const user = {
                name: name,
                address: address,
                phone: phone,
                age: age,
                gender: gender,
                uid: users.user.uid,
                email: users.user.email,
                time: Timestamp.now()
            }

            // create collection user
            const useRef = collection(fireDB, "users");
            // add user to the collection
            await addDoc(useRef, user)
            toast.success('Signup Successfully Added')
            navigate('/login')
            setName("")
            setEmail("")
            setPassword("")
            setAddress("")
            setAge("")
            setGender("")
            setPhone("")
            
            setLoading(false)
        }
        catch (e) {
            console.log(e)
            setLoading(false)
        }
    }

    return (

        <section className="bg-gray-900">
            {loading && <Loader />}
            <div className="h-full">
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    {/* left div */}
                    <div className="md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                        <div className='flex justify-center items-center h-screen'>
                            
                            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                                <div className="">
                                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                                </div>
                                <div>
                                    <input type="text"
                                        name='name'
                                        value={name}
                                        onChange={(e) =>{
                                            setName(e.target.value);
                                        }}
                                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                        placeholder='name'
                                    />
                                    {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
                                </div>
                                <div>
                                    <input type="email"
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                        placeholder='Email'
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                        placeholder='Password'
                                    />
                                </div>
                                 <div>
                                    <input type="text"
                                        name='address'
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                        placeholder='Address'
                                    />
                                </div>
                                <div>
                                    <input type="number"
                                        name='phone'
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                        placeholder='Phone'
                                    />
                                </div>
                                <div>
                                    <input type="number"
                                        name='age'
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                        placeholder='Age'
                                    />
                                </div>
                                <select
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <div className='flex justify-center mb-3'>
                                    <button
                                        onClick={signup}
                                        className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                                        Signup
                                    </button>
                                </div>
                                <div>
                                    <h2 className='text-white'>Have an account <Link className=' text-red-500 font-bold' to={'/login'}>Login</Link></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right div */}
                    <div className="shrink-1 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <img src={siginup} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup