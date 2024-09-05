import Styled from "styled-components";
import { theme } from "../../styles/theme";

export const Modal = Styled.div`
  margin: auto;
  margin-top: 40px;
  width: 50%;
  background: ${theme.colors.colorThree};
  border: 2px solid #000;
  box-shadow: 4px black;
  padding: 20px;

  @media(max-width: 768px){
    width: 350px;
  }  

`;

export const conteiner = Styled.div`
  /* margin-top: 50%; */
  /* top: -30%; */
  /* margin: auto;
  padding: 20% 10px; */
  margin: 15px;
  /* border: 1px solid violet; */
`;

export const PositionI = Styled.div`
  cursor: pointer;
  display:inline-block;
  float:right;
  /* border: 1px solid black; */
  /* margin-top: -2p?x; */
  color: #ffffff;
`;

export const cx = Styled.div`
  background: #ffffff;
  /* height: 50px; */
  /* border: 1px solid black; */
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 7px;
  margin: 5px auto;
  padding: 5px;

`;

export const cxTwo = Styled.div`
  /* border: 1px solid violet; */
  background:#ffff;
  width: 150px;
  display: flex;
  align-items: center;
  border-radius: 7px;
  margin: 10px auto;
  padding: 10px 5px;
  font-weight: bold;
  

`;

export const H1 = Styled.h2`
  font-weight:bold;
  margin: auto;
  /* border: 1px solid black; */
  
`;
export const inputs = Styled.div`
  /* border: 1px solid black; */
  width: 50%;
  display: flex;
  /* weight: 800px; */
  margin: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width:765px){
    margin: 2px;
}
`;

export const tituloTwo = Styled.input`
  /* border: 1px solid black; */
  border-radius: 7px;
  /* width: 80%; */
  padding: 15px;
  font-weight: bold;
  /* margin: 0px 10%; */
  /* font-size: 10px; */
  margin: 5px 2px;
  width: 100%;
  /* height: 38px; */

  @media(max-width:765px){
    width: 50vw;
    height: 38px;
}
`;

export const inputsTwo = Styled.div`
  /* border: 1px solid black; */
  width: 50%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;


`;

export const inputsPasswords = Styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px; 
  justify-content: space-between;
  align-items: center;

`;

export const passwords = Styled.input`
  /* border: 1px solid black; */
  margin: 10px;
  width: 400px;
  height: 40px;
  border-radius: 7px;
  padding: 15px;


`;

export const upload = Styled.div`
  /* border: 1px solid violet; */
  text-align:center;
  width: 97%;
  margin: 10px auto;
  height: 15vh;
  border-radius: 10px;
  background:white;
  padding: 10px 0px 0px 10px;
  box-sizing: border-box;
  cursor:pointer;


  @media(max-width:765px){
    height: 18vh;
}

`;
export const uploadIcon = Styled.div`
  text-align: center;
  font-size: 60px;

`;

export const p = Styled.p`
  font-weight: bold;

`;

export const inputsForm = Styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px; 
  justify-content: center;
  align-items: center;

@media(max-width:765px){
  flex-direction: column;
  gap: 0px; 

}
`;

export const divTextarea = Styled.div`
  /* border: 1px solid violet; */
  text-align:center;
  margin: auto;
  width: 97%;
`;

export const inputText = Styled.input`
  /* border: 1px solid black; */
  width: 100%;
  margin-bottom: 20px;
  margin-top:8px;
  height: 15vh;
  border-radius: 10px;
  padding: 10px 0px 0px 10px;
  box-sizing: border-box;

  @media(max-width:765px){
    height: 18vh;
}

`;

export const btnEntrar = Styled.p`
  margin: auto;
  font-size: 18px;
  color: ${theme.colors.colorThree};
  cursor:pointer;
`;
