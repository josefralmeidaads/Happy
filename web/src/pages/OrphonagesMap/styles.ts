import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PageMap = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;
`;

export const Aside = styled.aside`
  width: 440px;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  padding: 80px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  p {
    line-height: 28px;
    margin-top: 24px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  line-height: 24px;

  strong {
    font-weight: 800;
  }
`;

export const CreateOrphanage = styled(Link)`
  position: absolute;
  right: 40px;
  bottom: 40px;
  width: 64px;
  height: 64px;
  background: #15C3D6;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  transition: background-color 0.2s;
  z-index: 10;

  &:hover {
    background: #17D6EB;
  }
`;
