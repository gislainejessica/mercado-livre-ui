import React from 'react';

import { Container, Title, LocationCard, LoacationIcon, ReputationCard, ReputationThermometer, ReputatioRow, SuportIcon, ClockIcon, More } from './styles';

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informações sobre o vendedor</Title>

      <LocationCard>
        <LoacationIcon />

        <div>
          <p> Loacalização </p>
          <strong> Vitória, ES </strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />

        </ReputationThermometer>

        <ReputatioRow>
          <div>
            <strong> 234 </strong>
            <span> Venda nos ultimos 3 meeses </span>
          </div>
          <div>
            <strong><SuportIcon /> </strong>
            <span> Presta Bons Atendimentos </span>
          </div>
          <div>
            <strong> <ClockIcon /> </strong>
            <span> Venda nos ultimos 3 meeses </span>
          </div>
        </ReputatioRow>
      </ReputationCard>
      <More href="#"> Mais informações do vendedor </More>
    </Container>
  );
};

export default SellerInfo;
