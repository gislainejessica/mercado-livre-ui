import React from 'react';

import { Container, Condition, Row, HeartIcon, DispatchTag, PriceCard, PriceRow, IntallmentsInfo, StockStatus, MethodCard, TruckIcon, Actions, Button, ShieldIcon, Benefits } from './styles';

const ProductActions: React.FC = () => {
  return (
    <Container>
      <Condition> Novo </Condition>
      <Row>
        <h1> Camiseta linda branca, para ir pra festa </h1>
        <HeartIcon />
      </Row>
      <DispatchTag> Enviado Normalmente </DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol"> R$ </span>
          <span className="fration">66</span>
          <span className="cents">66</span>
        </PriceRow>
        <IntallmentsInfo> em 3x de 22,22 </IntallmentsInfo>
      </PriceCard>

      <StockStatus> Disponivel pra entrega </StockStatus>

      <MethodCard>
        <TruckIcon />
        <div>
          <span className="title"> Frete Gratis </span>
          <span className="details">Beneficio Cha da Mana</span>
          <a href="#">
            Ver mais opções
            </a>
        </div>
      </MethodCard>

      <Actions>
        <Button solid>Comprar Agora</Button>
        <Button> Adicionar ao carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon />
          <p>
            Compra garantida, receba o produto pedido ou devolvemos seu dienheiro
            </p>
        </li>
      </Benefits>

    </Container>
  );
};

export default ProductActions;
