import Logo from "./Logo";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <div className="header flex items-center justify-between px-10 py-6 bg-slate-100 shadow-100 sticky top-0 z-50 ">
      <Logo />
      <NavItems />
     
    </div>
  );
};

export default Header;