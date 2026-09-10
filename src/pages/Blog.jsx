import React from "react";
import BreadCramb from "../components/BreadCramb/BreadCramb";
import AddTitle from "../components/All/AddTitle";

function Blog() {
  return (
    <div className="max-w-content mx-auto px-8">
      <div className="my-8">
        <BreadCramb />
        <div className="mt-8 mr-4">
          <AddTitle title={"بلاگ"} />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <article className=" col-span-full sm:col-span-2 lg:col-span-1  shadow-[0_0_40px_-5px_rgba(0,0,0,0.25)] rounded-lg overflow-hidden p-4">
          <img src="/img/blog/blog.jpg" alt="" className="w-full " />
          <div className="mt-5">
            <h3 className="text-coffee text-xl font-bold line-clamp-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            </h3>
            <p className=" text-sm line-clamp-3 mt-3">
              لورم نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <img
                src="/img/profile/x.jpg"
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm"> محمد جواد</span>
            </div>
            <button className=" transition duration-400 cursor-pointer bg-coffee-bg text-text-header hover:text-coffee-bg hover:bg-text-header py-2 px-4 rounded-full">
              مطالعه
            </button>
          </div>
        </article>
        <article className=" col-span-full sm:col-span-2 lg:col-span-1  shadow-[0_0_40px_-5px_rgba(0,0,0,0.25)] rounded-lg overflow-hidden p-4">
          <img src="/img/blog/blog.jpg" alt="" className="w-full " />
          <div className="mt-5">
            <h3 className="text-coffee text-xl font-bold line-clamp-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            </h3>
            <p className=" text-sm line-clamp-3 mt-3">
              لورم نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <img
                src="/img/profile/x.jpg"
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm"> محمد جواد</span>
            </div>
            <button className=" transition duration-400 cursor-pointer bg-coffee-bg text-text-header hover:text-coffee-bg hover:bg-text-header py-2 px-4 rounded-full">
              مطالعه
            </button>
          </div>
        </article>
        <article className=" col-span-full sm:col-span-2 lg:col-span-1  shadow-[0_0_40px_-5px_rgba(0,0,0,0.25)] rounded-lg overflow-hidden p-4">
          <img src="/img/blog/blog.jpg" alt="" className="w-full " />
          <div className="mt-5">
            <h3 className="text-coffee text-xl font-bold line-clamp-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            </h3>
            <p className=" text-sm line-clamp-3 mt-3">
              لورم نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <img
                src="/img/profile/x.jpg"
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm"> محمد جواد</span>
            </div>
            <button className=" transition duration-400 cursor-pointer bg-coffee-bg text-text-header hover:text-coffee-bg hover:bg-text-header py-2 px-4 rounded-full">
              مطالعه
            </button>
          </div>
        </article>
        <article className=" col-span-full sm:col-span-2 lg:col-span-1  shadow-[0_0_40px_-5px_rgba(0,0,0,0.25)] rounded-lg overflow-hidden p-4">
          <img src="/img/blog/blog.jpg" alt="" className="w-full " />
          <div className="mt-5">
            <h3 className="text-coffee text-xl font-bold line-clamp-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            </h3>
            <p className=" text-sm line-clamp-3 mt-3">
              لورم نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <img
                src="/img/profile/x.jpg"
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm"> محمد جواد</span>
            </div>
            <button className=" transition duration-400 cursor-pointer bg-coffee-bg text-text-header hover:text-coffee-bg hover:bg-text-header py-2 px-4 rounded-full">
              مطالعه
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Blog;
