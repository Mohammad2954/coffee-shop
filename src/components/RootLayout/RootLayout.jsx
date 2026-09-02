import Header from "../Headre/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";
function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
