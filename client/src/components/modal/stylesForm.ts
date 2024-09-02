import Styled from "styled-components";
import { theme } from "../../styles/theme";

export const Modal = Styled.div`
  margin: 75px auto 0px;
  /* height: 100vh; */
  width: 60%;
  background: ${theme.colors.colorThree};
  border: 2px solid #000;
  box-shadow: 4px black;
  padding: 20px 10px;

`;
export const conteiner = Styled.div`
  margin: 10px;
`;

export const PositionI = Styled.div`
  display:inline-block;
  float:right;
  color: #ffffff;
`;

export const cx = Styled.div`
  background: #ffffff;
  width: 300px;
  height: 6vh;
  display: flex;
  align-items: center;
  border-radius: 7px;
  padding: 4px;
  margin: 7px auto;
`;

export const H1 = Styled.h2`
  font-weight:bold;
  margin: auto;
  
`;

export const inputs = Styled.div`
  display: flex;
  margin: 12px;
  flex-direction: column;
  justify-content:center;
  align-items:center;

`;

export const tituloTwo = Styled.input`
  border-radius: 7px;
  padding: 15px;
  font-weight: bold;
  margin: 10px 2px;
  width: 30vw;
  height: 45px;

`;

export const inputsTwo = Styled.div`
  margin: 12px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;



`;

export const titulo = Styled.input`
  border-radius: 7px;
  padding: 15px;
  font-weight: bold;
  margin: 10px 2px;
  width: 30vw;
  height:45px;
`;

export const inputsForm = Styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px; 
  justify-content: center;
  align-items: center;

`;

export const inputsFormTwo = Styled.div`
  display: flex;
  margin: 5px 0px;
  flex-direction: row;
  gap: 5px; 
  justify-content: center;
  align-items: center;
  
`;

export const buttonAdd = Styled.button`
  width:40px;
  height:40px;
  margin: 10px 2px;

`;

export const divTextarea = Styled.div`
  text-align:center;
`;

export const inputText = Styled.input`
  width: 50vw;
  margin: auto;
  height: 25vh;
  border-radius: 10px;
  padding: 10px 0px 0px 10px;
  box-sizing: border-box;

`;

export const TituloExperiencia = Styled.input`
  border-radius: 7px;
  padding: 15px;
  font-weight: bold;
  margin: 10px 2px;
  width: 15vw;
  height: 45px;

`;

export const btnCurriculo = Styled.p`
  margin: auto;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff
  cursor:pointer;
`;

export const btnEntrar = Styled.p`
  margin: auto;
  font-size: 18px;
  color: ${theme.colors.colorThree};
  cursor:pointer;
`;
