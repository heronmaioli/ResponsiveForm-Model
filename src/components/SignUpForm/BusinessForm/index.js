import React from "react";
import {
  Input,
  InsideFormContainer,
  ButtonsContainer,
  InputBox,
  ErrorMsg,
  InputTitle,
} from "../styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Required")
    .matches(
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
      "Your name must to contain only letters"
    )
    .min(6, "Too short! Min 6"),
  email: yup
    .string()
    .email("This field must to be in email format")
    .required("Required")
    .min(6, "Too short! Min 6"),
  phoneNumber: yup
    .string()
    .required("Required")
    .min(10, "Too short. Min 10")
    .max(14, "Too long! Max 14"),
  ein: yup
    .string()
    .required("Requidred")
    .min(9, "Too short! Min 9")
    .max(10, "Too long! Max 10"),
  zipCode: yup
    .string()
    .required("Required")
    .min(9, "Too short! Min 9")
    .max(10, "Too long! Max 10"),
  adress: yup.string().required("Required").min(6, "Too short! Min 6"),
  password: yup
    .string()
    .required("Required")
    .min(8, "Too short! Min 8")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
      "Your password must to contain letters and numbers"
    ),
  confPassword: yup
    .string()
    .required("Required")
    .oneOf([yup.ref("password"), null], "Do not match"),
});

function BusinessForm() {
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert(
      `Thanks to test my App ${data.name}! This is very important to me!!!`
    );
    reset();
  };

  const onError = (data) => {
    console.log("erro" + JSON.stringify(data));
  };

  function mask(value, pattern) {
    let i = 0;
    const v = value.toString();

    return v !== "" ? pattern.replace(/#/g, () => v[i++] || "") : "";
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        style={{ width: "100%" }}
      >
        <InsideFormContainer>
          <InputBox>
            <InputTitle>Full Name:</InputTitle>
            <Input
              type="text"
              name="name"
              placeholder="Jhon Smith"
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
            <InputTitle>Phone:</InputTitle>
            <Input
              type="tel"
              name="phoneNumber"
              placeholder="(xxx) xxx-xxxx"
              ref={register}
              error={errors.phoneNumber?.type}
              onBlur={(e) => {
                e.target.value = mask(e.target.value, "(###) ###-#####");
              }}
              onChange={(e) =>
                (e.target.value = e.target.value.replace(/\D/g, ""))
              }
            />
            <ErrorMsg>{errors.phoneNumber?.message}</ErrorMsg>
          </InputBox>

          <InputBox>
            <InputTitle>EIN:</InputTitle>
            <Input
              type="text"
              name="ein"
              placeholder="xx-xxxxxxx"
              autoComplete={"off"}
              ref={register}
              error={errors.ein?.type}
              onBlur={(e) => {
                e.target.value = mask(e.target.value, "##-#######");
              }}
              onChange={(e) =>
                (e.target.value = e.target.value.replace(/\D/g, ""))
              }
            />
            <ErrorMsg>{errors.ein?.message}</ErrorMsg>
          </InputBox>

          <InputBox>
            <InputTitle>Zip code:</InputTitle>
            <Input
              type="text"
              name="zipCode"
              placeholder="xxxxx-xxxx"
              ref={register}
              error={errors.zipCode?.type}
              onBlur={(e) => {
                e.target.value = mask(e.target.value, "#####-####");
              }}
              onChange={(e) =>
                (e.target.value = e.target.value.replace(/\D/g, ""))
              }
            />
            <ErrorMsg>{errors.zipCode?.message}</ErrorMsg>
          </InputBox>

          <InputBox>
            <InputTitle>Adress:</InputTitle>
            <Input
              type="text"
              name="adress"
              placeholder="250 5th Ave, Apt. #111, New York, NY..."
              ref={register}
              error={errors.adress?.type}
            />
            <ErrorMsg>{errors.adress?.message}</ErrorMsg>
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

export default BusinessForm;
