import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/actions/user";

const ProfileBtn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user);
    const [profileDropdown, setProfileDropdown] = useState(false);

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <>
            {userState.userInfo ? (
                <div className="flex flex-col items-center gap-y-5 gap-x-2 font-semibold text-white lg:flex-row lg:text-dark-soft">
                    <div className="group relative">
                        <div className="flex flex-col items-center">
                            <button
                                className="mt-5 flex items-center gap-x-1 rounded-full border-2 border-blue-500 px-6 py-2 font-semibold text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white lg:mt-0"
                                onClick={() =>
                                    setProfileDropdown(!profileDropdown)
                                }
                            >
                                <span>Account</span>
                                <MdKeyboardArrowDown />
                            </button>
                            <div
                                className={`${
                                    profileDropdown ? "block" : "hidden"
                                } w-max pt-4 transition-all duration-500 lg:absolute lg:bottom-0 lg:right-0 lg:hidden lg:translate-y-full lg:transform lg:group-hover:block`}
                            >
                                <ul className="flex flex-col overflow-hidden rounded-lg bg-dark-soft text-center shadow-lg lg:bg-transparent">
                                    {/* {userState?.userInfo?.admin && ( */}
                                        <button
                                            onClick={() =>
                                                navigate("/blog/dashboard")
                                            }
                                            type="button"
                                            className="px-4 py-2 text-white hover:bg-dark-hard hover:text-white lg:text-dark-soft"
                                        >
                                            Dashboard
                                        </button>
                                     {/* )} */}

                                    <button
                                        onClick={() =>
                                            navigate("/blog/profile")
                                        }
                                        type="button"
                                        className="px-4 py-2 text-white hover:bg-dark-hard hover:text-white lg:text-dark-soft"
                                    >
                                        Profile
                                    </button>
                                    <button
                                        onClick={logoutHandler}
                                        type="button"
                                        className="px-4 py-2 text-white hover:bg-dark-hard hover:text-white lg:text-dark-soft"
                                    >
                                        Logout
                                    </button>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => navigate("/blog/login")}
                    className="rounded-full border-2 border-blue-500 px-4 py-1 font-semibold text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white lg:mt-0"
                >
                    Sign in
                </button>
            )}
        </>
    );
};

export default ProfileBtn;
