import React from "react";
import {
  Input,
  InsideFormContainer,
  InputBox,
  ErrorMsg,
  ButtonsContainer,
  InputTitle,
} from "../styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Required")
    .min(3, "Too short! Min 3")
    .matches(
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
      "Your name must to contain only letters"
    ),
  email: yup
    .string()
    .email("This field must to be in email format")
    .required("Required")
    .min(6, "Too short! Min 6"),
  password: yup
    .string()
    .required("Required")
    .min(8, "Too Short! Min 8")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
      "Your password must to contain letters and numbers"
    ),
  confPassword: yup
    .string()
    .required("Required")
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
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        style={{ width: "100%" }}
      >
        <InsideFormContainer>
          <InputBox>
            <InputTitle>Name:</InputTitle>
            <Input
              type="text"
              name="name"
              placeholder="Jhon"
              ref={register}
              error={errors.name?.type}
            />
            <ErrorMsg>{errors.name?.message}</ErrorMsg>
          </InputBox>

          <InputBox>
            <InputTitle>Email:</InputTitle>
            <Input
              type="text"
              name="email"
              placeholder="exemple@exemple.com"
              ref={register}
              error={errors.email?.type}
            />
            <ErrorMsg>{errors.email?.message}</ErrorMsg>
          </InputBox>

          <InputBox>
            <InputTitle>Password:</InputTitle>
            <Input
              type="password"
              name="password"
              placeholder="********"
              ref={register}
              error={errors.password?.type}
            />
            <ErrorMsg>{errors.password?.message}</ErrorMsg>
          </InputBox>

          <InputBox>
            <InputTitle>Password confirmation:</InputTitle>
            <Input
              type="password"
              name="confPassword"
              placeholder="********"
              ref={register}
              error={errors.confPassword?.type}
            />
            <ErrorMsg>{errors.confPassword?.message}</ErrorMsg>
          </InputBox>

          <ButtonsContainer>
            <button type="submit">Submit </button>
            <button onClick={reset}>Cancel</button>
          </ButtonsContainer>
        </InsideFormContainer>
      </form>
    </>
  );
}

export default PersonForm;
