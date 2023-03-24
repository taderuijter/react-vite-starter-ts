import { mount } from "@cypress/react18";
import Stepper from "components/organisms/Stepper";

describe("Look if stepper is mounted", () => {
  it("mounts", () => {
    mount(<Stepper />);
  });
});
