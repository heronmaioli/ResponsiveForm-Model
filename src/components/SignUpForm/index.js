import React, { useState } from "react";
import {
  Container,
  ContentContainer,
  FormCotainer,
  PageTitle,
  RadiosContainer,
  RadioInput,
  Label,
} from "./styles";
import PersonForm from "./PersonForm";
import BusinessForm from "./BusinessForm";

function SignUpForm() {
  const [Conditional, setConditional] = useState("Business");

  return (
    <Container>
      <ContentContainer>
        <PageTitle>Sign Up</PageTitle>
        <FormCotainer>
          <RadiosContainer>
            <RadioInput
              type="radio"
              id="physical"
              name="custumerType"
              onClick={() => setConditional("Physical")}
              defaultChecked={true}
            />
            <Label htmlFor="physical">Physical</Label>
            <RadioInput
              type="radio"
              id="business"
              name="custumerType"
              onClick={() => setConditional("Business")}
            />
            <Label htmlFor="business">Business</Label>
          </RadiosContainer>

          {Conditional === "Physical" && <PersonForm />}
          {Conditional === "Business" && <BusinessForm />}
        </FormCotainer>
      </ContentContainer>
    </Container>
  );
}

export default SignUpForm;
