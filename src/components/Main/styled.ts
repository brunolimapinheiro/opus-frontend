import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Main = styled.main`
`;
export const Div = styled.div`
  background: ${theme.colors.colorOne};
  display: flex;
  margin: auto;
  padding: 50px 0;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    /* border: 1px solid saddlebrown; */
    /* padding: 20px; */
  
    flex-direction: row;
    align-items: normal;
  }
`;
export const Text = styled.h1`
  /* border: 1px solid black; */
  color: #ffffff;
  flex: 1;
  margin: 0px 30px 10px 190px;
  text-align: center;
  margin-right: 20px;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 20px;
    padding: 20px;
    width: 100%;
    height: 100px;
    margin: 0;

  }
`;
export const Img = styled.img`
  width: 39%;
  margin: 50px 95px;
  float: right;


  @media (max-width: 768px) {

    height: 50%;
    width: 100%;
    padding: 30px;
    margin: 0;
  }
`;
