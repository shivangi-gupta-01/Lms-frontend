import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import { useDispatch } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { isEmail } from "../helpers/regexMatcher";
import { login } from "../redux/slices/authSlice";

function Signin(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [signInDetail , setSignInDetail] = useState({
        email: '',
        password: ''
    });

    function handleUserInput(e){
        const { name , value } = e.target;

        setSignInDetail({
            ...signInDetail,
            [name]: value
        })
    }

    async function onFormSubmit(e){
        e.preventDefault();
        console.log(signInDetail);
        if(!signInDetail.email || !signInDetail.password){
            toast.error("Please fill all the required fields");
            return;
        }
        
        if(!isEmail(signInDetail.email)){
            toast.error("Invalid email provided");
            return;
        }

        const response = await dispatch(login(signInDetail));

        console.log(response);
        if(response?.payload?.data?.success){
            navigate("/");
        }
        
        setSignInDetail({
            name: '',
            password: ''
        })
        
        
    }

    return (
        <HomeLayout>
            <div className="flex overflow-x-auto flex-col items-center pt-20 h-[100vh] bg-[#0d1b3b]">
            <h1 className="text-5xl text-yellow-500 font-semibold py-8">Login</h1>
                    <form onSubmit={onFormSubmit} noValidate className="flex flex-col border items-center justify-center gap-3 p-8 rounded-lg bg-zinc-900 w-[22rem] text-white">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="text-xl font-semibold">Email</label>
                            <input 
                                    onChange={handleUserInput}
                                    value={signInDetail.email}
                                    required
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email.."
                                    className="text-center bg-transparent px-10 py-3 border rounded-sm"/>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="text-xl font-semibold">Password</label>
                            <input 
                                    onChange={handleUserInput}
                                    value={signInDetail.password}
                                    required
                                    type="text"
                                    name="password"
                                    id="password"
                                    placeholder="Enter your password.."
                                    className="text-center bg-transparent px-10 py-3 border rounded-sm"/>
                        </div>
                        <button className="text-lg font-semibold bg-yellow-600 hover:bg-yellow-400 transition-all ease-in-out duration-300 py-2 px-4 mt-2 rounded-sm">Sign in</button>
                        <p className="text-center">
                            Don't have an account ? <Link to={`/register`} className="text-accent hover:text-yellow-600">Sign up</Link>
                        </p>
                    </form>
            </div>
        </HomeLayout>
    );
}

export default Signin;