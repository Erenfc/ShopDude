import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../fireabase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';
import illustration from '../../assets/deliver.svg'; // Import your illustration here
import logo from '../../assets/logo.png'; // Import your logo here

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [loading, setLoading] = useState(false);

    const context = useContext(myContext);

    const signup = async () => {
        setLoading(true);
        if (name === "" || email === "" || password === "" || mobile === "") {
            toast.error("All fields are required");
            setLoading(false);
            return;
        }

        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);

            const user = {
                name: name,
                uid: users.user.uid,
                email: users.user.email,
                mobile: mobile,
                time: Timestamp.now()
            }
            const userRef = collection(fireDB, "users");
            await addDoc(userRef, user);
            toast.success("Signup Successfully");
            setName("");
            setEmail("");
            setPassword("");
            setMobile("");
        } catch (error) {
            console.log(error);
            toast.error("Signup Failed");
        }
        setLoading(false);
    }

    return (
        <div className="md:flex md:items-center md:justify-center h-screen bg-gradient-to-br from-purple-400 to-blue-500">
            <div className="max-w-sm w-full px-8 py-8 bg-white shadow-md rounded-lg md:mr-8 ml-0 md:ml-80 sticky top-0">
                <div className="flex justify-center">
                    <img src={logo} alt="Logo" className="sm:h-24 sm:w-24 md:h-32 md:w-32" />
                </div>
                <h1 className="text-2xl font-bold text-center mb-8">Sign Up</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder="Name"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder="Email"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder="Password"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="tel"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder="Mobile Number"
                    />
                </div>
                <button
                    onClick={signup}
                    className=' bg-green-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                    {loading ? <Loader /> : "Sign Up"}
                </button>
                <p className="text-center mt-4 text-gray-600">Already have an account? <Link to="/login" className="text-yellow-500 font-bold">Login</Link></p>
            </div>
            <div className="hidden md:block md:w-1/2">
                <img src={illustration} alt="Illustration" className="w-96" />
            </div>
        </div>
    );    
}

export default Signup;
