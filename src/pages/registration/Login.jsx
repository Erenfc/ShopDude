import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import myContext from '../../context/data/myContext'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../fireabase/FirebaseConfig';
import { toast } from 'react-toastify';
import Loader from '../../components/loader/Loader';
import illustration from '../../assets/deliver.svg'; // Import your illustration here
import logo from '../../assets/logo.png'; // Import your logo here

function Login() {
    const context = useContext(myContext)
    const {loading, setLoading} = context;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = async () => {
        setLoading(true)
        try {
            const result = await signInWithEmailAndPassword(auth,email,password);
            toast.success("Login successful", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              })
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/')
            setLoading(false)
            
        } catch (error) {
            console.log(error)
            setLoading(loading)
        }

    }
   
    return (
        <div className='md:flex md:items-center md:justify-center h-screen bg-gradient-to-br from-purple-400 to-blue-500'>
            <div className='max-w-lg w-full m-20 px-8 py-8 bg-white shadow-md rounded-lg md:mr-8 ml-0 md:ml-60 sticky top-0'>
            <div className="flex justify-center">
                <img src={logo} alt="Logo" className="sm:h-24 sm:w-24 md:h-32 md:w-32" />
            </div>
                <div className="">
                    <h1 className='text-center text-black text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input type="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[28em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[28em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                    onClick={login}
                        className=' bg-green-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-gray-600'>Don't have an account <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
            <div className="hidden md:block md:w-1/2">
                <img src={illustration} alt="Illustration" className="w-96" />
            </div>
        </div>
    )
}

export default Login