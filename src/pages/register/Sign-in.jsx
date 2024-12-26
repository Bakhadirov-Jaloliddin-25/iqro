import React from "react";
import logo from "@/assets/images/logo.svg";
import bg_sign from "@/assets/images/signup.png";
import google from "@/assets/images/google.svg";
import facebook from "@/assets/images/facebook.svg";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Signin = () => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address (e.g. name@example.com)")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-full h-screen flex">
      <div className="w-full h-screen relative">
        <img src={bg_sign} alt="Signup Background" className="w-full h-full" />
        <div className="flex absolute top-[383.82px] left-[141px] gap-[18.69px]">
          <img src={logo} alt="Logo" className="w-[200px] h-full" />
          <div className="flex flex-col gap-[36px] pt-6">
            <p className="w-[209px] h-[40px] font-[800] text-[77.01px] text-white leading-[74.11px] font-k2d">
              Alquran
            </p>
            <p className="w-[204px] h-[28px] font-[400] text-[53.1px] text-white leading-[52.13px] font-k2d">
              Persis.co.id
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[956px] rounded-r-xl flex items-center justify-center font-poppins">
        <div className="p-8 rounded-lg w-[500px] flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-4 font-inter">
            Sign In
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Start your day by reading the holy verses of the Quran.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 w-[500px]"
          >
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="E-Mail"
                {...register("email")}
                className="w-full h-12 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Password"
                {...register("password")}
                className="w-full h-12 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded-lg font-semibold hover:bg-teal-600 transition duration-200"
            >
              Sign In
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-sm text-[#333333]">or register via</p>
            <div className="flex justify-center space-x-[56px] mt-4">
              <img src={google} alt="google" className="cursor-pointer" />
              <img src={facebook} alt="facebook" className="cursor-pointer" />
            </div>
            <p className="mt-4 text-sm text-[#333333]">
              Don't have an account?{" "}
              <NavLink to="/signup" className="text-[#007DFE] hover:underline">
                Sign Up
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
