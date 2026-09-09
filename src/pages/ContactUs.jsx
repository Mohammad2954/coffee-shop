import React from "react";
import BreadCramb from "../components/BreadCramb/BreadCramb";

function ContactUs() {
  return (
    <div className="max-w-content mx-auto px-8">
      <div className="my-8">
        <BreadCramb />
        <h2 className="text-2xl font-bold text-coffee mt-12 mr-4">
          ارتباط با ما
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-4  ">
        <div className=" h-fit bg-[#FFE5BE] col-span-full sm:col-span-6 shadow-[0_0_40px_-5px_rgba(0,0,0,0.25)] p-4 rounded-3xl rounded-tr-none pb-6">
          <div className="mb-8 border-r pr-3">
            <h4 className="font-bold text-text-box text-xl">ارسال پیام</h4>
            <p className="text-[14px] mt-3">به پیام شما پاسخ میدهیم</p>
          </div>
          <form action="" className="grid grid-cols-4 gap-3">
            <input
              type="text"
              className="text-sm bg-[#302310] text-white outline-0 rounded-lg py-2 px-4 col-span-full sm:col-span-2"
              placeholder="نام شما (الزامی)"
            />

            <input
              type="text"
              className="text-sm bg-[#302310] text-white outline-0 rounded-lg py-2 px-4  col-span-full sm:col-span-2"
              placeholder="ایمیل شما (الزامی)"
            />

            <textarea
              className="bg-[#302310] text-white outline-0 rounded-lg col-span-4 py-2 px-4 text-sm"
              name=""
              id=""
              placeholder="پیام شما"
            ></textarea>
            <button className="bg-coffee-bg text-text-header text-sm py-2 w-16 rounded-3xl rounded-tr-none">
              ارسال
            </button>
          </form>
        </div>
        <div className=" col-span-full sm:col-span-6 ">
          <div className="bg-[#FFE5BE] shadow-[0_0_40px_-5px_rgba(0,0,0,0.25)] p-4 rounded-3xl rounded-tr-none pb-6">
            <div>
              <img src="/img/Footer/box.png" alt="" className="mx-auto " />
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <span className=" flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="m21.51 6.14-5-3a.99.99 0 0 0-.87-.08L8.09 5.89 3.51 3.14a.99.99 0 0 0-1.01-.01c-.31.18-.51.51-.51.87v13c0 .35.18.68.49.86l5 3c.26.16.58.19.87.08l7.55-2.83 4.59 2.75c.16.1.34.14.51.14s.34-.04.49-.13c.31-.18.51-.51.51-.87V7a.99.99 0 0 0-.49-.86M7 18.23l-3-1.8V5.77l3 1.8v10.67Zm8-1.93-6 2.25V7.69l6-2.25zm5 1.93-3-1.8V5.77l3 1.8v10.67Z"></path>
                </svg>
                اصفهان, اصفهان, اصفهان, پلاک34
              </span>
              <span className=" flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  transform="scale(-1,1) "
                >
                  <path d="M18.07 22h.35c.47-.02.9-.26 1.17-.64l2.14-3.09c.23-.33.32-.74.24-1.14s-.31-.74-.64-.97l-4.64-3.09a1.47 1.47 0 0 0-.83-.25c-.41 0-.81.16-1.1.48l-1.47 1.59c-.69-.43-1.61-1.07-2.36-1.82-.72-.72-1.37-1.64-1.82-2.36l1.59-1.47c.54-.5.64-1.32.23-1.93L7.84 2.67c-.22-.33-.57-.57-.97-.64a1.46 1.46 0 0 0-1.13.24L2.65 4.41c-.39.27-.62.7-.64 1.17-.03.69-.16 6.9 4.68 11.74 4.35 4.35 9.81 4.69 11.38 4.69ZM6.88 10.05c-.16.15-.21.39-.11.59.05.09 1.15 2.24 2.74 3.84 1.6 1.6 3.75 2.7 3.84 2.75.2.1.44.06.59-.11l1.99-2.15 3.86 2.57-1.7 2.46c-1.16 0-6.13-.24-9.99-4.1S4 7.06 4 5.91l2.46-1.7 2.57 3.86-2.15 1.99Z"></path>
                </svg>
                09139340000-09130001234
              </span>
              <span className=" flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  transform="scale(-1,1) "
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 2v.51l-8 6.22-8-6.22V6zM4 18V9.04l7.39 5.74c.18.14.4.21.61.21s.43-.07.61-.21L20 9.03v8.96H4Z"></path>
                </svg>
                coffee@gmail.com
              </span>
              <span className=" flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.58 2 2 6.58 2 12s4.58 10 10 10 10-4.58 10-10S17.42 2 12 2m0 18c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8-3.66 8-8 8"></path>
                  <path d="M13 7h-2v6h6v-2h-4z"></path>
                </svg>
                شنبه تا پنجشنبه : 10 صبح تا 17 بعدظهر جمعه : 10 صبح تا 15 بعدظهر
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
