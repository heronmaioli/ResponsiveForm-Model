import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1600px;
  align-items: center;
`;

export const PageTitle = styled.h1`
  padding: 3rem;
  color: white;
`;

export const FormCotainer = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 0 2rem 0;
  max-width: 1600px;
  background: #aaa;
  flex-direction: column;
  height: auto;
  align-items: center;
`;

export const TypesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 1rem;
`;

export const TypeInput = styled.div`
  display: flex;
  border: ${(props) =>
    props.selected === props.id ? "2px #fe7f2d solid" : "2px black solid"};
  background-repeat: no-repeat;
  background-size: cover;
  color: #fe7f2d;
  box-shadow: ${(props) =>
    props.selected === props.id ? "inset 0 0 3rem white, 0 0 1rem black " : ""};
  background-position: center;
  justify-content: center;
  font-size: ${(props) => (props.selected === props.id ? "3rem" : "0")};
  font-weight: bold;
  align-items: flex-end;
  width: 33%;
  height: 20rem;
  cursor: pointer;
  transition: 0.3s all;
  text-shadow: 2px 2px 2px black;
  border-radius: 2px;
  :hover {
    font-size: 3rem;
    border: 2px #fe7f2d solid;
  }
`;

export const InsideFormContainer = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: 40% 40%;
  justify-content: center;
  grid-column-gap: 5%;
  width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: 80%;
  }
`;

export const InputBox = styled.div`
  width: 100%;
  margin-bottom: 1.2rem;
`;

export const InputTitle = styled.h4``;

export const Input = styled.input`
  width: 95%;
  padding: 1rem 2.5% 1rem 2.5%;
  border-radius: 2px;
  text-justify: center;
  border: ${(props) => (props.error ? "1px solid #b00" : "0")};
  outline: none;
`;

export const ErrorMsg = styled.p`
  font-size: 1.5rem;
  color: #b00;
`;

export const ButtonsContainer = styled.div`
  margin: 1.5rem;
  display: flex;
  justify-content: space-around;

  @media (min-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  button {
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 2px;
    height: 4rem;
    width: 30%;
    background-color: #8f9;
    cursor: pointer;
    border: 1px solid #aaa;
    :hover {
      border: 1px solid #fff;
    }
    :last-child {
      background-color: #f89;
    }
  }
`;
