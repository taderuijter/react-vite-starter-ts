import Navbar from "components/layout/Navbar";

type BannerTypes = {
  children: React.ReactNode;
};

const Layout = ({ children }: BannerTypes) => (
  <>
    <Navbar />
    {children}
  </>
);

export default Layout;
