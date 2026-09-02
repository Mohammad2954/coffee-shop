import { useMatches } from "react-router";
import Header from "../Headre/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";
function RootLayout() {
  const match = useMatches();
  const hadleMatch = match[match.length - 1].handle?.Footer;
  return (
    <>
      {!hadleMatch && <Header />}

      <Outlet />
      {!hadleMatch && <Footer />}
    </>
  );
}

export default RootLayout;
