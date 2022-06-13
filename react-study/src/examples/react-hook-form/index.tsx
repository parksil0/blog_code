import React from "react";
import styled from "@emotion/styled";
import ApplyValidation from "./ApplyValidation";
import Integrating from "./Integrating";
import IntegratingUILibrary from "./IntegratingUILibrary";
import RegisterField from "./RegisterField";
import Start from "./Start";
import IntegratingControlledInputs from "./IntegratingControlledInputs";
import HandleErrors from "./HandleErrors";

const ReactHookForm = () => {
  return (
    <Wrapper>
      <Start />
      <RegisterField />
      <ApplyValidation />
      <Integrating />
      <IntegratingUILibrary />
      <IntegratingControlledInputs />
      <HandleErrors />
    </Wrapper>
  );
};

export default ReactHookForm;

const Wrapper = styled.div`
  text-align: center;
`;
