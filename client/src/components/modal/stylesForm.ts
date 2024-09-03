import Styled from "styled-components";
import { theme } from "../../styles/theme";

export const Modal = Styled.div`  
  margin: auto;
  margin-top: 90px;
  width: 1010px;
  background: ${theme.colors.colorThree};
  border: 2px solid #000;
  box-shadow: 4px black;
  padding: 10px;

  @media(max-width: 768px){
    width: 350px;
  }

`;

export const conteiner = Styled.div`
  margin: 15px;

`;

export const PositionI = Styled.div`
  cursor: pointer;
  display:inline-block;
  float:right;
  color: #ffffff;

 
`;

export const cx = Styled.div`
  background: #ffffff;
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 7px;
  padding: 5px;
  margin: 10px auto;
  
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

  @media(max-width:768px){
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width:95px;

  }  

`;
export const tituloTwo = Styled.input`
  border-radius: 7px;
  padding: 15px;
  font-weight: bold;
  margin: 10px 2px;
  width: 400px;
  height: 45px;

  @media(max-width: 768px){
    width:100%;
  }

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
  width: 400px;
  height:45px;

  @media(max-width: 768px){
    width:100%;
  }
  
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
  margin: 10px 0px;
  flex-direction: row;
  gap: 5px; 
  justify-content: center;
  align-items: center;

  @media(max-width:768px){
    grid-template-columns: repeat(1, 1fr); 
    gap: 0px;
    
  } 

`;


export const buttonAdd = Styled.button`
  width:40px;
  height:40px;
  margin: 10px 2px;

`;

export const divTextarea = Styled.div`
  text-align:center;

  @media(max-width: 768px){
    height: 100px;
    
  }
`;

export const inputText = Styled.input`
  width: 87%;
  margin: auto;
  height: 200px;
  border-radius: 10px;
  padding: 10px 0px 0px 10px;
  box-sizing: border-box;

  @media(max-width: 768px){
    width: 100%;
    height: 100%;
    
  }
  
`;

export const TituloExperiencia = Styled.input`
  border-radius: 7px;
  padding: 15px;
  font-weight: bold;
  margin: 10px 2px;
  width: 230px;
  height: 45px;

  @media(max-width: 768px){
    width: 100%;
    
  }

`

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

