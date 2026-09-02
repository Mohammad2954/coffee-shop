import Button from "../components/Page404/Button/Button";

function Page404() {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-8 sm:gap-20 bg-blue-300">
      <div className="mt-8">
        <h1 className="font-bold-AvenirNextCyr text-6xl">Oops!</h1>
        <h3 className="text-center mt-4">You are lost</h3>
      </div>

      <img className="px-16" src="/img/404/405.png" alt="" />
      <Button />
    </div>
  );
}

export default Page404;
