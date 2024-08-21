import Styled from "styled-components";
import { theme } from "../../styles/theme";

export const Modal = Styled.div`  
  /* position: absolute; */
  margin: 5% auto;
  /* top: 10%;
  left: 35%; */
  transform:translate(-50%,- 50%);
  width: 50%;
  /* height: 20%; */
  background: ${theme.colors.colorThree};
  border: 2px solid #000;
  box-shadow: 4px black;
  padding:10px;
  /* border: 1px solid black; */

  @media(max-width:768px){
    /* position: absolute; */
    margin: 30% auto;
    /* top: 20%; */
    /* left: 10%; */
    transform:translate(-50%,- 50%);
    width: 80%;
    height: 50%;
    background: ${theme.colors.colorThree};
    border: 2px solid #000;
    box-shadow: 4px black;
    padding: 5px;
  /* border: 1px solid black; */
    /* margin: auto;
    width: 50%
    height: 50%;
    position: absolute;
    transform:translate(-50%,- 50%);
    top: 20%;
    left: 10%; */
  }

`;
export const conteiner = Styled.div`
  /* margin-top: 50%; */
  /* top: -30%; */
  /* margin: auto;
  padding: 20% 10px; */
  margin: 10px;
  /* border: 1px solid blue; */
`;
export const PositionI = Styled.div`
/* PRECISA AUMENTAR O TAMANHO */
  cursor: pointer;
  display:inline-block;
  float:right;
  /* border: 1px solid black; */
  /* margin-top: -2p?x; */
  color: #ffffff;
`;

export const CxLogin = Styled.div`
    /* height: 50px; */
  /* border: 1px solid black; */
    background: #ffffff;
    width: 300px;
    display: flex;
    align-items: center;
    border-radius: 7px;
    padding: 10px;
    margin: 10px auto;

    @media(max-width:768px){
      width: 100px;
    }
`
export const H1 = Styled.h2`
  font-weight:bold;
  margin: auto;
  /* border: 1px solid black; */
  
`;
export const inputs = Styled.div`
  /* border: 1px solid black; */
  display: flex;
  /* padding: 10px; */
  width: 80%;
  margin: 10px auto;
  flex-direction: column;
  /* align-items: center; */

  @media(max-width:768px){
    margin: 5px auto;

  }
`;

export const titulo = Styled.input`
  border-radius:10px;
  /* width: 80%; */
  padding: 20px;
  font-weight: bold;
  margin: 10px 0px;
  font-size: 18px;
  /* margin: auto 15px;
  margin-top: 7px; */


  @media(max-width:768px){
    /* width: 80%; */
    padding: 10px;
    /* margin: 0px 10%; */
    font-size: 16px;
    margin: 5px 0px;
    /* margin-top: 5px; */

  }
`;
export const divEsquecerSenha = Styled.div`
  width: 160px;
  margin: 10px auto 1px;
  margin-left: 73%;
  font-size: 18px;
  /* border: 1px solid violet; */

  @media(max-width:768px){
    width: 140px;
    /* margin: 10px auto 20px; */
    
    margin-left: 100px;
    font-size: 16px;
    /* border: 1px solid violet; */

  }

`;
export const esquecerSenha = Styled.p`
  color: #ffffff;
  cursor: pointer;
  
  
`;
export const tipoCandidato = Styled.div`
  /* border: 1px solid violet; */
  width: 80%;
  color: #ffffff;
  margin: 10px auto;

  /* @media(max-width:768px){
    width: 80%;
    margin: 10px auto;
  }
   */
  
`
export const FormLabel = Styled.p`  
  margin: 5px 0;
  /* font-size: 18p/x; */
  font-weight: bold;

  /* @media(max-width:768px){
    font-size: 18px;

  } */


`
// export const Radio = Styled.input.attrs({ type: 'radio' })`
 
//   /* Estilo para o estado de seleção */
//   /* &:checked {
//     background-color: #007bff;
//     border-color: #007bff;
//   } */
  
// `
export const labelCandidato = Styled.label`
  color: #ffffff;
  /* font-size: 20px; */
`

export const cx = Styled.div`
  /* height: 50px; */
  /* border: 1px solid black; */
  background: #ffffff;
  font-size: 25px;
  width: 80%;
  height: 60px;
  display: flex;
  align-items: center;
  border-radius: 7px;
  padding: 10px;
  margin: 10px auto;

  @media(max-width:768px){
    height: 50px;
    font-size: 18px;
  }
  
`;

export const btnEntrar = Styled.p`
  margin: auto;
  color: ${theme.colors.colorThree};
  cursor:pointer;


`;

export const divCadastros = Styled.div`
  width: 80%;
  margin: auto;
  display: flex;

  
  /* border: 1px solid black; */
  /* padding: 5px; */
`;
