import Navbar from "@/components/layout/Navbar";

interface PropTypes {
  children: React.ReactNode;
}

const Layout = ({ children }: PropTypes) => (
  <>
    <Navbar />
    {children}
  </>
);

export default Layout;
