import React, { FunctionComponent, Fragment } from "react";
import { TextContent, Text } from "@patternfly/react-core";

const Welcome: FunctionComponent = () => {
  return (
    <Fragment>
      <TextContent>
        <Text component="h1">Welcome</Text>
        <Text component="p">
          Create your own server here ;)
        </Text>
      </TextContent>
    </Fragment>
  );
};

export default Welcome;