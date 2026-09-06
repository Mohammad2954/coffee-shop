import React from "react";
import { useNavigate } from "react-router";

function Login() {
  document.documentElement.style.backgroundColor = "#392624";
  const x = useNavigate();
  return (
    <div className="px-8">
      <div className="max-w-xl  bg-[#FFE5BE] mx-auto mt-20 rounded-lg pb-8">
        <h1 className=" border-b-2 border-box-border block pb-3 text-xl text-center  pt-4">
          ورود
        </h1>
        <span
          className="text-sm text-coffee-bg  block text-center mt-2 cursor-pointer"
          onClick={() => {
            x("/signup");
          }}
        >
          حسابی ندارید؟
        </span>
        <div className="mt-4 px-2 sm:px-16">
          <div className="flex flex-col gap-2 mt-4 ">
            <label htmlFor="email" className="text-sm text-coffee-bg">
              ایمیل یا نام کاربری :
            </label>
            <input
              type="text"
              className=" outline-0 border-2 border-coffee mx-3 px-2 py-1 rounded-full text-coffee-bg"
              placeholder="ایمیل یا نام کاربری ..."
            />
          </div>
          <div className="flex flex-col gap-2 mt-4 ">
            <label htmlFor="password" className="text-sm text-coffee-bg">
              گذرواژه :
            </label>
            <input
              type="password"
              className=" outline-0 border-2 border-coffee mx-3 px-2 py-1 rounded-full text-coffee-bg"
              placeholder="گذرواژه ..."
            />
          </div>
          <button className="w-full bg-coffee-bg text-text-header mt-6 py-3 text-xl">
            ورود
          </button>
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-between mt-4 px-2 sm:px-16">
          <div className="flex items-center justify-center gap-2">
            <input type="checkbox" />
            <label htmlFor="" className="text-sm text-coffee-bg">
              مرا به خاطر بسپار
            </label>
          </div>
          <div>
            <span className="text-sm text-coffee-bg">
              رمز عبور خود را فراموش کردید ؟
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
