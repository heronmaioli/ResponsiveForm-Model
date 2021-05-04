import React, { useState } from "react";
import {
  Container,
  ContentContainer,
  FormCotainer,
  PageTitle,
  TypesContainer,
  TypeInput,
} from "./styles";
import PersonForm from "./PersonForm";
import BusinessForm from "./BusinessForm";
import personImg from "../../images/person.jpg";
import businessImg from "../../images/business.jpg";

function SignUpForm() {
  const [Conditional, setConditional] = useState("Person");

  return (
    <Container>
      <ContentContainer>
        <PageTitle>Sign Up</PageTitle>
        <FormCotainer>
          <TypesContainer>
            <TypeInput
              id="Person"
              name="custumerType"
              onClick={() => setConditional("Person")}
              style={{
                backgroundImage: `url(${personImg})`,
              }}
              selected={Conditional}
            >
              Person
            </TypeInput>
            <TypeInput
              id="Business"
              name="custumerType"
              onClick={() => setConditional("Business")}
              style={{
                backgroundImage: `url(${businessImg})`,
              }}
              selected={Conditional}
            >
              Business
            </TypeInput>
          </TypesContainer>

          {Conditional === "Person" ? <PersonForm /> : <BusinessForm />}
        </FormCotainer>
      </ContentContainer>
    </Container>
  );
}

export default SignUpForm;
