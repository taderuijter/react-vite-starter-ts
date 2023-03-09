import Navbar from "@/components/globals/Navbar";

interface PropTypes {
  children: React.ReactNode;
}

function Layout({ children }: PropTypes) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
