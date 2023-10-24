import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../firebase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';

import siginup from '../../assets/img/siginup.svg';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    // Error messages
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [ageError, setAgeError] = useState('');

    const context = useContext(MyContext);
    const { loading, setLoading } = context;

    const navigate = useNavigate();

    const isEmailValid = (email) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailRegex.test(email);
    };

    const isAgeValid = (age) => {
        return age >= 18 && age <= 60;
    };

    const isPhoneValid = (phone) => {
        const phoneRegex = /^[0-9]{10,12}$/;
        return phoneRegex.test(phone);
    };

    const signup = async () => {
        setLoading(true);

        // Reset error messages
        setNameError('');
        setEmailError('');
        setPasswordError('');
        setAddressError('');
        setPhoneError('');
        setAgeError('');

        if (
            name === '' ||
            password === '' ||
            email === '' ||
            address === '' ||
            phone === '' ||
            gender === '' ||
            age === ''
        ) {
            setLoading(false);
            toast.error('All fields are required');
            return;
        }

        if (name.length < 8) {
            setLoading(false);
            setNameError('Name must be at least 8 characters');
            return;
        }

        if (!isEmailValid(email)) {
            setLoading(false);
            setEmailError('Please enter a valid email address');
            return;
        }

        if (password.length < 8) {
            setLoading(false);
            setPasswordError('Password must be at least 8 characters');
            return;
        }

        if (address.length < 10) {
            setLoading(false);
            setAddressError('Address must be at least 10 characters');
            return;
        }

        if (!isPhoneValid(phone)) {
            setLoading(false);
            setPhoneError('Please enter a valid phone number');
            return;
        }

        if (!isAgeValid(age)) {
            setLoading(false);
            setAgeError('Age must be between 18 and 60');
            return;
        }

        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);

            const user = {
                name: name,
                address: address,
                phone: phone,
                age: age,
                gender: gender,
                uid: users.user.uid,
                email: users.user.email,
                time: Timestamp.now(),
            };

            const useRef = collection(fireDB, 'users');
            await addDoc(useRef, user);
            toast.success('Signup Successfully Added');
            navigate('/login');
            setName('');
            setEmail('');
            setPassword('');
            setAddress('');
            setAge('');
            setGender('');
            setPhone('');
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    return (

        <section className="bg-gray-900">
            {loading && <Loader />}
            <div className="h-full">
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div className="md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                        <div className='flex justify-center items-center h-screen'>
                            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                                <div className="">
                                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name='name'
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                        placeholder='Name'
                                    />
                                    {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                        placeholder='Email'
                                    />
                                    {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                        placeholder='Password'
                                    />
                                    {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name='address'
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                        placeholder='Address'
                                    />
                                    {addressError && <p className="text-red-500 text-sm">{addressError}</p>}
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        name='phone'
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                        placeholder='Phone'
                                    />
                                    {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        name='age'
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                        placeholder='Age'
                                    />
                                    {ageError && <p className="text-red-500 text-sm">{ageError}</p>}
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
                                        className='bg-red-500 w-full text-white font-bold px-2 py-2 rounded-lg'>
                                        Signup
                                    </button>
                                </div>
                                <div>
                                    <h2 className='text-white'>
                                        Have an account <Link className='text-red-500 font-bold' to={'/login'}>Login</Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shrink-1 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <img src={siginup} alt="Signup Image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup