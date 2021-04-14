import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1600px;
  background: #0f7;
  padding: 2rem;
  align-items: center;
`;

export const PageTitle = styled.h1`
  padding: 1rem;
`;

export const FormCotainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1600px;
  background: #aaa;
  margin: 2rem;
`;

export const RadiosContainer = styled.div``;

export const RadioInput = styled.input``;

export const Label = styled.label``;

export const InputTitle = styled.h4``;

export const InputsContainer = styled.div`
  margin-left: 1rem;
`;

export const FormInput = styled.input.attrs((props) => ({
  error: props.error,
}))`
  border: ${(props) => (props.error ? "1px solid #f22" : "0")};
  outline: none;
`;

export const ErrorMsg = styled.p`
  font-size: 0.9rem;
  color: #b00;
`;

export const ButtonsContainer = styled.div``;
