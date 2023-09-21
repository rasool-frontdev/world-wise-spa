import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import style from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={style.footer}>
        <p className={style.copyright}>Copyright {new Date().getFullYear}</p>
      </footer>
    </div>
  );
};

export default Sidebar;
