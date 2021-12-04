import React, { useState } from "react";
import {
  Title,
  Form,
  FormGroup,
  Select,
  SelectOption,
  ActionGroup,
  Button,
  PageSection,
  AlertGroup,
  Alert,
  AlertActionCloseButton,
  AlertVariant,
} from "@patternfly/react-core";

type Alerts = {
  key: string;
  variant: AlertVariant;
  title: string;
};

export default function CreateServer() {
  const [open, setOpen] = useState(false);
  const [alerts, setAlerts] = useState<Alerts[]>([]);

  const save = async () => {
    await fetch("/api/cluster", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    setAlerts([
      ...alerts,
      {
        key: "new",
        variant: AlertVariant.success,
        title: "Creating your server please wait",
      },
    ]);
  };

  const removeAlert = (key: string) => {
    setAlerts([...alerts.filter((el) => el.key !== key)]);
  };

  return (
    <>
      <AlertGroup isToast isLiveRegion>
        {alerts.map(({ key, variant, title }) => (
          <Alert
            variant={AlertVariant[variant]}
            title={title}
            actionClose={
              <AlertActionCloseButton
                title={title}
                variantLabel={`${variant} alert`}
                onClose={() => removeAlert(key)}
              />
            }
            key={key}
          />
        ))}
      </AlertGroup>
      <Title headingLevel="h1" size="lg">
        Create minecraft server
      </Title>
      <PageSection variant="light" className="pf-u-p-0">
        <Form isHorizontal>
          <FormGroup label="Minecraft server type" fieldId="serverType">
            <Select
              toggleId="serverType"
              onToggle={setOpen}
              onSelect={(_, value) => {
                console.log(value);
                setOpen(false);
              }}
              variant="single"
              isOpen={open}
            >
              <SelectOption value="Sponge" />
              <SelectOption value="BitBucket" />
              <SelectOption value="Vanilla" />
            </Select>
          </FormGroup>
          <ActionGroup>
            <Button onClick={save}>Save</Button>
            <Button variant="link">Cancel</Button>
          </ActionGroup>
        </Form>
      </PageSection>
    </>
  );
}
