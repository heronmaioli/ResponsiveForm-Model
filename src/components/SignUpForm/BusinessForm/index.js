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
  phoneNumber: yup
    .string()
    .required("Your phone is required for sign up")
    .min(9, "Too short")
    .max(14, "Too long")
    .matches(/^[0-9&-()]*$/, "Only number are allowed"),

  ein: yup
    .string()
    .required("Your EIN is required for sign up")
    .matches(/\d/g, "Only number are allowed"),
  postalCode: yup
    .string()
    .required("Your postal code is required for sign up")
    .matches(/\d/g, "Only number are allowed")
    .min(5, "Too short")
    .max(10, "Too long"),
  adress: yup
    .string()
    .required("Your adress confirmation is required for sign up")
    .matches(/\D/g, "Your adress must to contain only letters"),
  number: yup
    .string()
    .required("Your adress number is required for sign up")
    .matches(/\d/g, "Only number are allowed"),
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

function BusinessForm() {
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

          <InputTitle>Phone:</InputTitle>
          <FormInput
            type="tel"
            name="phoneNumber"
            ref={register}
            error={errors.phoneNumber?.type}
            autoComplete={"off"}
            onChange={(e) => {
              e.target.value = e.target.value.replace(
                /^(\d{3})(\d{3})(\d)/,
                "($1) $2-$3"
              );
            }}
          />
          <ErrorMsg>{errors.phoneNumber?.message}</ErrorMsg>

          <InputTitle>EIN:</InputTitle>
          <FormInput
            type="text"
            name="ein"
            ref={register}
            error={errors.ein?.type}
          />
          <ErrorMsg>{errors.ein?.message}</ErrorMsg>

          <InputTitle>Postal code:</InputTitle>
          <FormInput
            type="text"
            name="postalCode"
            ref={register}
            error={errors.postalCode?.type}
          />
          <ErrorMsg>{errors.postalCode?.message}</ErrorMsg>

          <InputTitle>Adress:</InputTitle>
          <FormInput
            type="text"
            name="adress"
            ref={register}
            error={errors.adress?.type}
          />
          <ErrorMsg>{errors.adress?.message}</ErrorMsg>

          <InputTitle>Number:</InputTitle>
          <FormInput
            type="text"
            name="number"
            ref={register}
            error={errors.number?.type}
          />
          <ErrorMsg>{errors.number?.message}</ErrorMsg>
          <InputTitle>Password:</InputTitle>
          <FormInput
            type="text"
            name="password"
            ref={register}
            error={errors.password?.type}
          />
          <ErrorMsg>{errors.password?.message}</ErrorMsg>

          <InputTitle>Password confirmation:</InputTitle>
          <FormInput
            type="text"
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

export default BusinessForm;
