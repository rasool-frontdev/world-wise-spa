import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import style from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={style.app}>
      <Sidebar />
      <Map />
    </div>
  );
};

export default Layout;
