import "./Footer.css";

function Footer() {
  return (
    <footer className=" relative">
      <img
        src="/img/Footer/bg.jpg"
        className=" absolute inset-0 w-full h-96"
        alt=""
      />
      <div className=" absolute inset-0 h-96 bg-black/40"></div>
    </footer>
  );
}

export default Footer;
