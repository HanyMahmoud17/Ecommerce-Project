import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyContext from '../../context/data/myContext'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/FirebaseConfig'
import { toast } from 'react-toastify'
import Loader from '../../components/loader/Loader'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const context = useContext(MyContext);
    const { loading, setLoading } = context;

    const isEmailValid = (email) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailRegex.test(email);
    };

    const navigate = useNavigate()

    const login = async () => {
        setLoading(true)

        if(email === "" || password === ""){
            setLoading(false)
            return toast.error('Please complete all fields')
        }

        if (!isEmailValid(email)) {
            setLoading(false);
            toast.error('Please enter a valid email address');
            return;
        }
        try {
            const result = await signInWithEmailAndPassword(auth, email, password)
            if (result) {
                toast.success('Login Successfully');
                localStorage.setItem('user', JSON.stringify(result));
                navigate('/');
            } else {
                toast.error('Login failed. Please check your email and password.');
            }
            setLoading(false)

        }
        catch (e) {
            console.log(e);
            
            setLoading(false)
        }

    }

    return (
        <section className="bg-gray-900">
            {loading && <Loader />}
            <div className="h-full">
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="w-full" alt="Sample image" />
                    </div>
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                        <div className='flex justify-center items-center h-screen'>
                            
                            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                                <div className="">
                                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
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
                                <div className=' flex justify-center mb-3'>
                                    <button
                                        onClick={login}
                                        className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                                        Login
                                    </button>
                                </div>
                                <div>
                                    <h2 className='text-white'>Don't have an account <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login