import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";
import style from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={style.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
};

export default Layout;
