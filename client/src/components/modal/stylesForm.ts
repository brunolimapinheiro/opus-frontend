import Styled from "styled-components";
import { theme } from "../../styles/theme";

export const Modal = Styled.div`  
/* // <<<<<<< HEAD
//   position: absolute;
//   margin: auto;
//   top: 5%;
//   left:10%;
// ======= */
  /* position: absolute; */
  margin: 90px auto;
  /* top: 5%;
  left:5%;
  bottom:5%; */
  transform:translate(-50%,- 50%);
  width: 1010px;
  /* height: 750px; */
  /* width: 800px;
  height: 80%; */
  background: ${theme.colors.colorThree};
  border: 2px solid #000;
  box-shadow: 4px black;
  padding: 20px 10px;
  /* border: 1px solid black; */

/* // <<<<<<< HEAD
//   @media(max-width:1129px){
//   right:7%;
//     width: 100%
//     height: 30%;
//     top: 20%;
//     left: 10%;
    
//   }
//   @media(max-width:680px){
//     height:900px;
//     top: 2%;
//     left:5%;

//   }
//   @media(max-width:452px){
//    height:800px;
//}
// ======= */
  /* @media(max-width:768px){
    margin: 100px auto;
    transform:translate(-50%,- 50%);
    width: 90%;
    height: 50%;
  } */

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
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 7px;
  padding: 5px;
  margin: 10px auto;
/* // <<<<<<< HEAD
//   width:200px;
//   height:40px;
//   @media(max-width:1129px){
//     width:50;
//     height:40px;;
//   }
// ======= */

  /* @media(max-width:768px){
      width: 150px;
    }
   */
`;
export const H1 = Styled.h2`
  font-weight:bold;
  margin: auto;
  /* border: 1px solid black; */
  
`;
export const inputs = Styled.div`
  /* border: 1px solid black; */
  display: flex;
  /* weight: 800px; */
  margin: 12px;
  /* padding: 10px; */
  flex-direction: column;
  justify-content:center;
  align-items:center;

  /* // @media(max-width:1129px){
  // display: flex;
  // margin: 0px 10px 20px 10px;
  
  // flex-direction: column;
  // justify-content:center;
  // align-items:center;
  // width:129px;

  // }
  // @media(max-width:452px){
  //  width:40px;
  //  height:40px;
  //  margin:10px; 
  // } */

`;
export const tituloTwo = Styled.input`
  /* border: 1px solid black; */
  border-radius: 7px;
  /* width: 80%; */
  padding: 15px;
  font-weight: bold;
  /* margin: 0px 10%; */
  /* font-size: 10px; */
  margin: 10px 2px;
  width: 400px;
  height: 45px;

/* //   @media(max-width:1129px){
//     width:350px;
//     height:40px;
//     margin-bottom:10px;
//   }

//   @media(max-width:452px){
//     width:280px;
// =======
//   } */

`;
export const inputsTwo = Styled.div`
  /* border: 1px solid blue; */
  margin: 12px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;

  /* @media(max-width:1129px){
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
  } */

`;



export const titulo = Styled.input`
  /* border: 1px solid black; */
  border-radius: 7px;
  /* width: 80%; */
  padding: 15px;
  font-weight: bold;
  /* margin: 0px 10%; */
  /* font-size: 10px; */
  margin: 10px 2px;
  width: 400px;
  /* width:250px; */
  height:45px;

  /* @media(max-width:1129px){
    width:150px;
    height:40px;
  }
  @media(max-width:452px){
    width:120px;
    height:40px;

  } */
`;


export const inputsForm = Styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  gap: 5px; 
  justify-content: center;
  align-items: center;

  /* // @media(max-width:1129px){
  //   display:flex;
  //   flex-direction:column;
  //   gap:5px; 
  //   justify-content:center;
  //   align-items:center;
  // } */
`;

export const inputsFormTwo = Styled.div`
  /* border: 1px solid black; */
  display: flex;
  margin: 10px 0px;
  flex-direction: row;
  gap: 5px; 
  /* margin-left: 40px; */
  justify-content: center;
  align-items: center;
  /* // display:grid;
  // grid-template-columns: repeat(2, 1fr); 
  // gap: 20px;

  // @media(max-width:1129px){
  //   display:flex;
  //   flex-direction:row;
  //   margin-top:10px;
  //   justify-content:center;
  //   align-items:center;

  // }
  // @media(max-width:680px){
  //   display: flex;
  //   flex-direction: column;
    
  //   } */
  


  /* @media(max-width:768px){
    grid-template-columns: repeat(1, 1fr); 
    gap: 0px;
    /* padding: 10px; */

    
  /* } */
`;

// export const inputsFormTwo = Styled.div`
//   display:grid;
//   grid-template-columns: repeat(4, 1fr); 
//   gap: 10px;

// `;

export const buttonAdd = Styled.button`
  /* border: 1px solid black;  */
  width:40px;
  height:40px;
  margin: 10px 2px;
  /* width: 230px;
  height: 45px; */

`;

export const divTextarea = Styled.div`
  /* border: 1px solid black; */
  /* margin: 0px 12px; */
  text-align:center;
`;
export const inputText = Styled.input`
  width: 87%;
  margin: auto;
  height: 200px;
  border-radius: 10px;
  padding: 10px 0px 0px 10px;
  box-sizing: border-box;

  /* @media(max-width:1129px){
    width:350px;
    height:100px;
    border-radius:10px;
    padding:10px 0px 0px 10px;
    box-sizing: border-box;
  }
  @media(max-width:452px){
    width:280px;
  } */

  /**::placeholder {
    color: #888;
    font-size: 16px;
    text-align: start;
    transform: translateY(-30%); 
  } */
  
`;

export const TituloExperiencia = Styled.input`
/* border: 1px solid black; */
  border-radius: 7px;
  /* width: 80%; */
  padding: 15px;
  font-weight: bold;
  /* margin: 0px 10%; */
  /* font-size: 10px; */
  margin: 10px 2px;
  width: 230px;
  height: 45px;

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
