import Nav from "./Nav";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full  z-20 h-24 bg-white">
      <div className="max-w-screen-md h-16 flex flex-nowrap items-center justify-between m-auto px-5">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
