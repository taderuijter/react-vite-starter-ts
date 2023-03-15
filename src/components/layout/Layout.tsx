import Navbar from "@/components/layout/Navbar";
import { Banner } from "@/components/globals/Banner";
import { Cookies } from "@/components/globals/Cookies";

type BannerTypes = {
  children: React.ReactNode;
};

const Layout = ({ children }: BannerTypes) => (
  <>
    <Banner href="/about">
      <strong className="font-semibold">GeneriCon 2023</strong> Join us in
      Denver from June 7 – 9 to see what’s coming next.
    </Banner>
    <Navbar />
    {children}
    <Cookies />
  </>
);

export default Layout;
