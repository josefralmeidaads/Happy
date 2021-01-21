import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { 
  PageLanding,
  ContentWrapper, 
  Main,
  Location,
  EnterApp,
} from './styles';

import logoImg from '../../assets/logo.svg';

const Landing: React.FC = () => {
  return (
    <PageLanding>
      <ContentWrapper>
        <img src={logoImg} alt="logo"/>

        <Main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </Main>

        <Location>
          <strong>Ubá</strong>
          <span>Minas Gerais</span>
        </Location>

        <EnterApp to="/app">
          <FiArrowRight size={26}/>
        </EnterApp>
      </ContentWrapper>
    </PageLanding>
  );
}

export default Landing;