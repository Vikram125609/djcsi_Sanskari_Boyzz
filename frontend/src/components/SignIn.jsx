import React from 'react'
import { useNavigate } from 'react-router'
import { useState } from 'react';
import axios from 'axios';

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSignIn = async (e) => {
        e.preventDefault();

        if (email && password) {
            console.log(email);
            console.log(password);

            const data = await axios.post('http://localhost:3000/api/hr/v1/signin',{
                "email":email
            });

            console.log(data.data.hr[0]);

            sessionStorage.setItem("HR-DATA", JSON.stringify(data.data.hr[0]));
            navigate("/home");
        }

    }



    const navigate = useNavigate();
    return (
        <div style={{ width: "80%", height: "80%", margin: "0 auto", boxShadow: "0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22)", borderRadius: "20px" }}>

            <div
                class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between p-6 " style={{
                    margin: "2rem 0",
                    paddingRight: "25px", borderRadius: "20px", border: "1px solid #f2f2f2"
                }}>

                <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                    <img
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        class="w-full"
                        alt="Phone image" />
                </div>


                <div class="md:w-8/12 lg:ml-6 lg:w-5/12">
                    <form >

                        <div class="relative mb-6" data-te-input-wrapper-init>
                            <h4>Email</h4>
                            <input
                                type="text"
                                class="peer block min-h-[auto] w-full rounded border-0  px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleFormControlInput3"
                                value={email}
                                placeholder="Email address" style={{ border: "2px solid #c8c8c8" }}
                                onChange={(e) => setEmail(e.target.value)} />
                            {/* <label
                        for="exampleFormControlInput3"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15]  transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-600 dark:peer-focus:text-neutral-600"
                    >Email address
                    </label> */}
                        </div>

                        <div class="relative mb-6" data-te-input-wrapper-init>
                            <h4>Password</h4>
                            <input
                                type="password"
                                class="peer block min-h-[auto] w-full rounded border-0  px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleFormControlInput33"
                                value={password}
                                placeholder="Password" style={{ border: "2px solid #c8c8c8" }}
                                onChange={(e) => setPassword(e.target.value)} />
                            {/* <label
                        for="exampleFormControlInput33"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-600 dark:peer-focus:text-neutral-600"
                    >Password
                    </label> */}
                        </div>


                        <div class="mb-6 flex items-center justify-between">
                            <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                    class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
                                    type="checkbox"
                                    value=""
                                    id="exampleCheck3"
                                    checked />
                                <label
                                    class="inline-block pl-[0.15rem] hover:cursor-pointer"
                                    for="exampleCheck3">
                                    Remember me
                                </label>
                            </div>


                            <a
                                href="#!"
                                class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                            >Forgot password?</a
                            >
                        </div>


                        <button
                            type="submit"
                            class="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            style={{ background: "#3061AF" }}
                            onClick={handleSignIn}>
                            Sign in

                        </button>


                        <div
                            class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p
                                class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                OR
                            </p>
                        </div>


                        <a
                            class="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                            style={{ backgroundColor: "#3b5998" }}
                            href="#!"
                            role="button"
                            data-te-ripple-init
                            data-te-ripple-color="light">

                            Continue with Google
                        </a>
                        <a onClick={() => navigate("/signup")}
                            class="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
                            style={{ backgroundColor: "#55acee" }}
                            role="button"
                            data-te-ripple-init
                            data-te-ripple-color="light">

                            Dont't have account? Sign Up
                        </a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn
