import Styled from "styled-components";
import { theme } from "../../styles/theme";

export const Modal = Styled.div`  
  position: absolute;
  margin: auto;
  top: 5%;
  left:10%;
  transform:translate(-50%,- 50%);
  /* width: 800px;
  height: 80%; */
  background: ${theme.colors.colorThree};
  border: 2px solid #000;
  box-shadow: 4px black;
  padding:10px;
  /* border: 1px solid black; */

  @media(max-width:1129px){
  right:7%;
    width: 100%
    height: 30%;
    top: 20%;
    left: 10%;
    
  }
  @media(max-width:680px){
    height:900px;
    top: 2%;
    left:5%;

  }
  @media(max-width:452px){
   height:800px;
    
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
  display:inline-block;
  float:right;
  /* border: 1px solid black; */
  /* margin-top: -2p?x; */
  color: #ffffff;
`;
export const cx = Styled.div`
  /* height: 50px; */
  /* border: 1px solid black; */
  background: #ffffff;
  display: flex;
  align-items: center;
  border-radius: 7px;
  padding: 5px;
  margin: 10px auto;
  width:200px;
  height:40px;
  @media(max-width:1129px){
    width:50;
    height:40px;;
  }
  
`;
export const H1 = Styled.h2`
  font-weight:bold;
  margin: auto;
  /* border: 1px solid black; */
  
`;
export const inputs = Styled.div`
  /* border: 1px solid black; */
  display: flex;
  margin: 10px;
  flex-direction: column;
  justify-content:center;
  align-items:center;

  @media(max-width:1129px){
  display: flex;
  margin: 0px 10px 20px 10px;
  
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width:129px;

  }
  @media(max-width:452px){
   width:40px;
   height:40px;
   margin:10px; 
  }

`;

export const inputsTwo = Styled.div`
  display: flex;
  margin: 10px;
  flex-direction: column;
  justify-content:center;
  align-items:center;

  @media(max-width:1129px){
  display: flex;
  margin: 0px 10px 20px 10px;
  gap:30px;
  flex-direction: row;
  justify-content:center;
  align-items:center;
  width:129px;
  }

  @media(max-width:452px){
    margin: 0px 10px 20px 10px;
    gap:10px;
    margin: 0px 5px 20px 5px;
  }

`;

export const tituloTwo = Styled.input`
    border-radius: 7px;
  /* width: 80%; */
  padding: 5px;
  font-weight: bold;
  /* margin: 0px 10%; */
  /* font-size: 10px; */
  margin: auto 10px;
  width:250px;
  height:40px;
  @media(max-width:1129px){
    width:350px;
    height:40px;
    margin-bottom:10px;
  }

  @media(max-width:452px){
    width:280px;
  }
`;

export const inputsForm = Styled.div`
 display:flex;
flex-direction:row;
gap:5px; 
justify-content:center;
align-items:center;

@media(max-width:1129px){
  display:flex;
flex-direction:column;
gap:5px; 
justify-content:center;
align-items:center;
}
`;

export const inputsFormTwo = Styled.div`
display:flex;
flex-direction:row;
gap:5px; 
margin-left:40px;
justify-content:center;
align-items:center;

@media(max-width:1129px){
display:flex;
flex-direction:row;
margin-top:10px;
justify-content:center;
align-items:center;

}
@media(max-width:680px){
  display: flex;
  flex-direction: column;
  
  }
  
`;

export const buttonAdd = Styled.button`
  width:40px;
  height:40px;
`;

export const divTextarea = Styled.div`
  text-align:center;
`;
export const inputText = Styled.input`
  width:525px;
  height:200px;
  border-radius:10px;
  padding:10px 0px 0px 10px;
  box-sizing: border-box;
  @media(max-width:1129px){
  width:350px;
  height:100px;
  border-radius:10px;
  padding:10px 0px 0px 10px;
  box-sizing: border-box;
  }
  @media(max-width:452px){
    width:280px;
  }

  /**::placeholder {
    color: #888;
    font-size: 16px;
    text-align: start;
    transform: translateY(-30%); 
  } */
  
`;

export const titulo = Styled.input`
  border-radius: 7px;
  /* width: 80%; */
  padding: 5px;
  font-weight: bold;
  /* margin: 0px 10%; */
  /* font-size: 10px; */
  margin: auto 10px;
  width:250px;
  height:40px;
  @media(max-width:1129px){
    width:150px;
    height:40px;
  }
  @media(max-width:452px){
    width:120px;
    height:40px;

  }
`;

export const btnEntrar = Styled.p`
  margin: auto;
  color: ${theme.colors.colorThree};
  cursor:pointer;
`;
