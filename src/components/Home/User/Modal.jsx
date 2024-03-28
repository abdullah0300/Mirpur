import React, { useState } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import InputField from '../../InputField';

const Modal = () => {
    const [type, setType] = useState("login");
    return (
        <>
            <div className="modal fade text-black" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" >
                        <div className="modal-body">
                            {/* CLOSE BUTTON */}
                            <div className=' flex justify-end'>
                                <IoCloseCircleOutline className=' text-[40px] cursor-pointer' data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            {/* MAIN HEADING */}
                            <h3 className='text-2xl font-semibold text-[#161616]' style={{ textAlign: "center" }}>{type === "login" ? "Log In" : "Sign In"}</h3>

                            {/* FORM */}
                            <div className=' flex flex-col gap-3 w-full px-3'>

                                {/* INPUTS FOR LOG IN */}
                                {type === "login" ?
                                    <>
                                        <InputField label={"Email"} />
                                        <InputField label={"Password"} />
                                        <p className=' text-[#161616] text-right underline'>Forgot your password?</p>
                                    </> :
                                    <>
                                        <InputField label={"Username"} />
                                        <InputField label={"Email"} />
                                        <InputField label={"Password"} />
                                        <InputField label={"Confirm Password"} />
                                    </>
                                }

                                {/* BUTTON */}

                                <button className=' bg-primaryColor text-[#FFFFFF] py-3'>{type === "login" ? "Log In" : "Sign Up"}</button>
                                <button className=' bg-[#ACACAC] text-[#FFFFFF] py-3' onClick={() => {
                                    setType(type === "login" ? "signup" : "login")
                                }}>{type === "login" ? "Create An Account" : "Log In"}</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal