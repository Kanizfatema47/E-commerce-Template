import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import { Divider } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HttpsIcon from "@mui/icons-material/Https";

const Signin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col justify-center py-20 px-20 lg:flex-row">
      <div className="w-full lg:w-2/4 px-10 py-10 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-white ... ">
        <h1 className="text-[40px] font-bold">Login to Your Account</h1>
        <p className="mb-4">Login using social networks</p>
        <div className="mb-4">
          <span className="mx-1">
            {" "}
            <FacebookOutlinedIcon />
          </span>
          <span className="mx-1">
            {" "}
            <GoogleIcon />
          </span>
          <span className="mx-1">
            {" "}
            <LinkedInIcon />
          </span>
        </div>
        <Divider />
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="flex w-3/4 py-2 rounded-2xl px-2 mb-5 bg-slate-100 mx-auto">
            <span className="mr-1">
              {" "}
              <MailOutlineIcon />
            </span>

            <input type="text" placeholder="Email" />
          </div>

          <div className="flex justify-between   w-3/4 py-2 rounded-2xl px-2 mx-auto bg-slate-100">
            <div className="flex items-center">
              <span className="mr-1">
                <HttpsIcon />
              </span>
              <input
                type="password"
                placeholder="Password"
                className="formPasswordField bg-transparent"
              />
            </div>

            <span className="cursor-pointer">
              <RemoveRedEyeOutlinedIcon />
            </span>
          </div>
          <button className="w-1/3 bg-sky-500 text-white py-2 rounded-2xl mt-5 font-semibold">
            Sign In
          </button>
        </form>
      </div>
      <div className="w-full lg:w-1/4 px-10 py-10 bg-gradient-to-r from-cyan-500 to-blue-500 ... flex flex-col justify-center text-center">
        <h1 className="text-[35px] font-bold mb-5">New Here?</h1>
        <p>Sing up and discover a great amount of new opportunities!</p>
        <button className="w-full bg-white text-black py-2 rounded-2xl mt-5 font-semibold">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signin;
