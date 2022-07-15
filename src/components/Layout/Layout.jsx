import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const Layout = () => (
  <>
    <NavBar />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
