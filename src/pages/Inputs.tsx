// Import React libraries
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

// Import components
import { Layout } from "components/layout/Layout/Layout";
import { InputField } from "components/inputs/InputField/Input";
import { SelectInput } from "components/inputs/Select/Select";
import { RadioInput } from "components/inputs/Radio/Radio";
import { TextArea } from "components/inputs/TextArea/TextArea";
import { Badge } from "components/lables/Badge/Badge";
import { Toggle } from "components/inputs/Toggle/Toggle";
import { CheckboxInput } from "components/inputs/Checkbox/Checkbox";
import { PasswordInput } from "components/inputs/Password/Password";
import { Breadcrumbs } from "components/navigation/Breadcrumbs/Breadcrumbs";
import { Container } from "components/layout/Container/Container";

function Inputs() {
  const { t } = useTranslation();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    console.log(`Name: ${name}, Value: ${value}`);
  };

  const handleTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = event.target;
    console.log(`Name: ${name}, Value: ${value}`);
  };

  const handleCheckbox = (event: boolean) => {
    console.log(event);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Inputs - React Vite Starter (JS Build)</title>
      </Helmet>

      <Layout>
        <Container style="space-y-8 py-4">
          <Breadcrumbs
            pages={[
              { id: "1", name: "Inputs", href: "/inputs", current: true },
            ]}
          />
          <h1 className="text-4xl font-bold text-gray-900">
            {t("pages.inputs.title")}
          </h1>
          <p className="text-lg text-gray-500">{t("pages.inputs.content")}</p>
          <Badge size="sm">Inputs</Badge>
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
          <PasswordInput
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
          <SelectInput
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
          <RadioInput
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
              handleTextArea(event);
            }}
          />
          <Toggle
            label="Toggle"
            onChange={(event) => {
              handleCheckbox(event);
            }}
          />
          <CheckboxInput
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
