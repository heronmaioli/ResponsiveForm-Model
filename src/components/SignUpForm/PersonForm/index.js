import React from "react";
import { FormInput, InputsContainer, ErrorMsg, InputTitle } from "../styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Your name is required for sign up")
    .min(3, "Your name must to be at least 3 letters long")
    .matches(
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
      "Your name must to contain only letters"
    ),
  email: yup
    .string()
    .email("This field must to be an email")
    .required("Your email is required for sign up")
    .min(6, "Your email must to be at least 6 letters long"),
  password: yup
    .string()
    .required("Your password is required for sign up")
    .min(8, "Your password must to be at least 8 letters long")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
      "Your password must to contain letters and numbers"
    ),
  confPassword: yup
    .string()
    .required("Your password confirmation is required for sign up")
    .oneOf([yup.ref("password"), null], "Do not match"),
});

function PersonForm() {
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const onError = (data) => {
    console.log("erro" + JSON.stringify(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <InputsContainer>
          <InputTitle>Name:</InputTitle>
          <FormInput
            type="text"
            name="name"
            ref={register}
            error={errors.name?.type}
          />
          <ErrorMsg>{errors.name?.message}</ErrorMsg>

          <InputTitle>Email:</InputTitle>
          <FormInput
            type="text"
            name="email"
            ref={register}
            error={errors.email?.type}
          />
          <ErrorMsg>{errors.email?.message}</ErrorMsg>

          <InputTitle>Password:</InputTitle>
          <FormInput
            type="password"
            name="password"
            ref={register}
            error={errors.password?.type}
          />
          <ErrorMsg>{errors.password?.message}</ErrorMsg>

          <InputTitle>Password confirmation:</InputTitle>
          <FormInput
            type="password"
            name="confPassword"
            ref={register}
            error={errors.confPassword?.type}
          />
          <ErrorMsg>{errors.confPassword?.message}</ErrorMsg>
        </InputsContainer>
        <input type="submit" />
        <button onClick={reset}>Cancel</button>
      </form>
    </>
  );
}

export default PersonForm;
