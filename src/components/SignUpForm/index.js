import React from "react";

import {
  Container,
  ContentContainer,
  FormCotainer,
  PageTitle,
  TheForm,
} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
});

function SignUpForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <Container>
      <ContentContainer>
        <PageTitle>Sign Up</PageTitle>
        <FormCotainer>
          <TheForm onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="firstName" ref={register} />
            <p>{errors.firstName?.message}</p>
            <input type="submit" />
          </TheForm>
        </FormCotainer>
      </ContentContainer>
    </Container>
  );
}

export default SignUpForm;
