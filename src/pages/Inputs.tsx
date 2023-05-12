// Import React libraries
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

// Import components
import { Layout } from "design-system/layout/Layout/Layout";
import { Container } from "design-system/layout/Container/Container";
import { InputField } from "design-system/inputs/InputField/InputField";
import { Select } from "design-system/inputs/Select/Select";
import { Radio } from "design-system/inputs/Radio/Radio";
import { TextArea } from "design-system/inputs/TextArea/TextArea";
import { Badge } from "design-system/lables/Badge/Badge";
import { Toggle } from "design-system/inputs/Toggle/Toggle";
import { Checkbox } from "design-system/inputs/Checkbox/Checkbox";
import { Password } from "design-system/inputs/Password/Password";
import { Breadcrumbs } from "design-system/navigation/Breadcrumbs/Breadcrumbs";

function Inputs() {
  const { t } = useTranslation();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    console.log(`Name: ${name}, Value: ${value}`);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Inputs - React Vite Starter (JS Build)</title>
      </Helmet>

      <Layout>
        <Container className="mt-8 mb-8 space-y-8">
          <Breadcrumbs
            pages={[
              { id: "1", name: "Inputs", href: "/inputs", current: true },
            ]}
          />
          <h1 className="text-4xl font-bold text-gray-900">
            {t("pages.inputs.title")}
          </h1>
          <p className="text-lg text-gray-500">{t("pages.inputs.content")}</p>
          <Badge text="Inputs" type="green" size="sm" />
          <InputField
            required={true}
            label="First name"
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter your first name"
            onChange={(event) => {
              handleInput(event);
            }}
          />
          <InputField
            required={true}
            label="E-mail"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your e-mail address"
            onChange={(event) => {
              handleInput(event);
            }}
          />
          <Password
            required={true}
            label="Password"
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={(event) => {
              handleInput(event);
            }}
          />
          <InputField
            required={false}
            label="Number"
            type="number"
            name="number"
            id="email"
            placeholder="Enter a number"
            onChange={(event) => {
              handleInput(event);
            }}
          />
          <InputField
            required={false}
            label="URL"
            type="url"
            name="url"
            id="url"
            placeholder="www.example.com"
            onChange={(event) => {
              handleInput(event);
            }}
          />
          <InputField
            required={false}
            label="Phonenumber"
            type="tel"
            name="tel"
            id="tel"
            placeholder="+31620370451"
            onChange={(event) => {
              handleInput(event);
            }}
          />
          <Select
            label="Select"
            name="select"
            id="select"
            defaultValue="Canada"
            options={[
              { value: "Canada", label: "Canada" },
              { value: "United States", label: "United States" },
              { value: "Mexico", label: "Mexico" },
            ]}
            onChange={(event) => {
              console.log(event);
            }}
          />
          <Radio
            label="Notification"
            description="Choose your notification preference"
            options={[
              {
                id: "1",
                value: "SMS",
              },
              {
                id: "2",
                value: "E-Mail",
              },
              {
                id: "3",
                value: "Push Notification",
              },
            ]}
            onChange={(event) => {
              handleInput(event);
            }}
          />
          <TextArea
            label="Textarea"
            name="textarea"
            id="textarea"
            onChange={(event) => {
              handleInput(event);
            }}
          />
          <Toggle
            label="Toggle"
            onChange={(event) => {
              handleInput(event);
            }}
          />
          <Checkbox
            label="Checkbox"
            options={[
              {
                id: "1",
                value: "SMS",
              },
              {
                id: "2",
                value: "E-Mail",
              },
              {
                id: "3",
                value: "Push Notification",
              },
            ]}
            onChange={(event) => {
              handleInput(event);
            }}
          />
        </Container>
      </Layout>
    </>
  );
}

export default Inputs;
