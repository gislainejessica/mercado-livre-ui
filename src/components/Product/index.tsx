import React from "react";
import TshirtImage from "../../assets/tshirt.png";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={TshirtImage} alt="Camisa Branca" className="Tshirt" />
          </Gallery>

          <Info />
        </Column>
        {/* <ProductAction />
          <SellerInfo /> */}

        <Column>
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4> Garantia </h4>

    <div>
      <span>
        <p className="title"> Garantia certificada </p>
        <p className="descriptiob">
          Receba seu produto ou devolvemos seu dinheiro de volta
        </p>
      </span>
      <span>
        <p className="title"> Garantia Do Vendedor</p>
        <p className="descriptiob">Não Garantimos nada</p>
      </span>
    </div>
    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2> Descrição </h2>
    <p>
      A selecção de uma cadeira adequada é muito importante para prevenir
      futuras lesões. Com esta cadeira Trevalla, terá a comodidade e bem-estar
      que precissa em teu día. Alem disso é ideal para ser posta em qualquer
      parte de sua casa. Seu desenho permite que adoptes no entorno que queiras
      dando um toque mais moderno e colorido a teus espaços.
    </p>
  </Description>
);

export default Product;
