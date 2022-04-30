import styled from "styled-components"

export const ContentWrapper = styled.section`
    padding-left: 210px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1280px){
      padding-left: 0;
    }
`

export const ContentContainer = styled.section`
    width: 90%;
    margin-top: 90px;
    margin-bottom: 10px;

    @media screen and (max-width: 767px){
      width:97% ;
    }
    
    
`

export const AuthWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #04131D;
    width: 100%;
    height: 100vh;
`

export const AuthContainer = styled.section`
    padding:15px 20px;
    width: ${({large}) => (large ? '800px' : '400px')} ;
    border-radius: 6px;
    background: #19262F;
    h1 { font-size: 30px; margin-bottom:10px; color: #fff; text-align: center;}
`


export const ItemsWrapper = styled.div`
  & span {
    color: #09DBDF;
  }
  & > div > span {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const CustomSelect = styled.select`
  background: #E2E6ED;
  border: 1px solid #d8dbe0;
  color: #646F81;
  padding: 6px 7px;
  border-radius: 5px;
  width: 100%;
  outline: none;
  margin-bottom: 6px;
  margin-top: 6px;
`