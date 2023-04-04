import { mount } from "@cypress/react18";
import Stepper from "components/Stepper/Stepper";

describe("Look if stepper is mounted", () => {
  it("mounts", () => {
    mount(<Stepper />);
  });
});
