import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import { useState } from "react";
import toast from "react-hot-toast";
import { isEmail, isPassValid } from "../helpers/regexMatcher";
import { useDispatch } from "react-redux";
import { createAccount } from "../redux/slices/authSlice";

function Signup(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [signupDetail , setSignupDetail] = useState({
        username: '',
        email: '',
        password: '',
        avatar: ''
    });

    const [previewImage , setPreviewImage] = useState("");

    function handleUserInput(e){
        const {name , value } = e.target;

        setSignupDetail({
            ...signupDetail,
            [name]: value
        });
    }

    function handleImage(e){
        e.preventDefault();

        const uploadImage = e.target.files[0];

        if(!uploadImage) return ;

        setSignupDetail({
            ...signupDetail,
            avatar: uploadImage
        })

        const fileReader = new FileReader();
        fileReader.readAsDataURL(uploadImage);
        fileReader.addEventListener('load' ,function (){ setPreviewImage(this.result)});

    }

    async function onFormSubmit(e){
        e.preventDefault();
        console.log(signupDetail);
        if(!signupDetail.username || !signupDetail.email || !signupDetail.password){
            toast.error('Please fill all the fields');
            return;
        }

        if(signupDetail.username.length < 5){
            toast.error('Username should be at-least of 5 characters');
            return;
        }

        if(!isEmail(signupDetail.email)){
            toast.error('Invalid email provided');
            return;
        }

        if(!isPassValid(signupDetail.password)){
            toast.error('Password length should be greater of 8 character and contain at least one digit (0-9) and at least one special character');
            return;
        }

        const formData = new FormData();

        formData.append("username" , signupDetail.username);
        formData.append("email" , signupDetail.email);
        formData.append("password" , signupDetail.password);
        formData.append("avatar" , signupDetail.avatar);

        const response = await dispatch(createAccount(formData));
        console.log(response);
        if(response?.payload?.data?.success){
            navigate("/");
        }

        setSignupDetail({
            username: '',
            email: '',
            password: '',
            avatar: ''
        })

        setPreviewImage("");
    }

    return (
        <HomeLayout>
            <div className="flex overflow-x-auto flex-col items-center pt-16 h-[100vh] bg-[#0d1b3b]">
            <h1 className="text-5xl text-yellow-500 font-semibold py-6">Registration Form</h1>
                <form onSubmit={onFormSubmit} noValidate className="flex flex-col border items-center justify-center gap-3 px-8 py-8 rounded-lg bg-zinc-900 w-[22rem] text-white">
                    

                    <label htmlFor="image_uploads" className="cursor-pointer">
                        { previewImage ? ( <img className="h-24 w-24 rounded-full m-auto" src={previewImage}/> ) : ( <BsPersonCircle className="h-24 w-24 rounded-full m-auto" /> )}
                    </label>
                    <input  
                            onChange={handleImage}
                            type="file" 
                            className="hidden" 
                            name="image_uploads" 
                            id="image_uploads" 
                            accept=".jpg, .jpeg, .png, .svg"/>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="username" className="text-xl font-semibold">Username</label>
                        <input 
                            onChange={handleUserInput}
                            value={signupDetail.username}
                            required type="text" 
                            name="username" 
                            id="username" 
                            placeholder="Enter your username.." 
                            className="text-center bg-transparent px-10 py-3 border rounded-sm" />
                    </div>

                    <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-xl font-semibold">Email</label>
                        <input 
                            onChange={handleUserInput}
                            value={signupDetail.email}
                            required 
                            type="text" 
                            name="email" 
                            id="email" 
                            placeholder="Enter your email.." 
                            className="text-center bg-transparent px-10 py-3 border rounded-sm" />
                    </div>

                    <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="text-xl font-semibold">Password</label>
                        <input 
                        onChange={handleUserInput}
                        value={signupDetail.password}
                        required 
                        type="text" 
                        name="password" 
                        id="password" 
                        placeholder="Enter your password.." 
                        className="text-center bg-transparent px-10 py-3 border rounded-sm" />
                    </div>

                    <button className="mt-2 bg-yellow-600 hover:bg-yellow-400 transition-all ease-in-out duration-300 px-4 py-2 font-semibold rounded-sm text-lg">
                        Create account
                    </button>

                    <p className="text-center">Already have an account ? <Link to={`/login`} className="cursor-pointer hover:text-yellow-600 text-accent">Login</Link> </p>
                </form>
            </div>
        </HomeLayout>
    );
}

export default Signup;