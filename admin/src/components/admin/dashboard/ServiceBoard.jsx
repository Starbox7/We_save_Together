import React from 'react';
import styled from 'styled-components';
import { AiOutlineSetting, AiOutlineQuestionCircle, AiOutlineShareAlt } from 'react-icons/ai';
import BarGraph from './component/barGraph';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 24.5vw;
  margin-right: 25px;
  margin-bottom: 25px;
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  padding-top: 0px;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5vh;
`;
const Title = styled.p`
  font-weight: bold;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

function ServiceBoard() {
  return (
    <Container>
      <TitleContainer>
        <Title>Service Total</Title>
        <IconContainer>
          <AiOutlineQuestionCircle size={15} style={{ marginRight: '10px' }} />
          <AiOutlineSetting size={15} style={{ marginRight: '10px' }} />
          <AiOutlineShareAlt size={15} style={{ marginRight: '10px' }} />
        </IconContainer>
      </TitleContainer>
      <BarGraph />
    </Container>
  );
}

export default ServiceBoard;
