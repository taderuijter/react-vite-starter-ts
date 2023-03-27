import Navbar from "components/layout/Navbar";
import { Modal } from "components/messages/Modal";
import { Button } from "components/inputs/Button";
import { Icon } from "components/labels/Icon";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

type BannerTypes = {
  children: React.ReactNode;
};

const Layout = ({ children }: BannerTypes) => (
  <>
    <Modal
      icon={
        <Icon
          icon={<CheckCircleIcon className="h-8 w-8 text-green-400" />}
          className="bg-green-100"
        />
      }
      title="Sample Modal"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus odio, pulvinar in convallis a, bibendum eget est."
      button={
        <Button
          type="button"
          text="Save changes"
          styling="solid"
          onClick={() => {
            console.log("BAMI");
          }}
        />
      }
    />
    <Navbar />
    {children}
  </>
);

export default Layout;
