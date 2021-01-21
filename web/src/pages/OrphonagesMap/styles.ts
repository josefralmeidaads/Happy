import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Popup } from 'react-leaflet';

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

export const Popups = styled(Popup)`
  .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
  }

  .leaflet-popup-content {
    color: #0089A5;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #15C3D6;
    border-radius: 12px;
    transition: background-color 0.2s;
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);

    &:hover {
      background-color: #0089A5;
    }
  }

  .leaflet-popup-tip-container {
    display: none;
  }
`;
