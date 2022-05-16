
import { NavBar } from "./NavBar";
import FooterComponent from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <FooterComponent/>
    </div>
  );
};

export default Layout;
