import card from '../../assets/creditcard.svg';

import { CardSectionContainer, CardContainer, CardLeft, CardRight } from './styles';

export function CardSection() {
  return (
    <CardSectionContainer>
      <CardContainer>
        <CardLeft>
          <h2 className="secondary-heading">
            One card for all your payments
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem laudantium quaerat, dolores debitis sit impedit dolorum atque similique, aspernatur ullam facere molestiae ab exercitationem!
          </p>
        </CardLeft>
        <CardRight>
          <img src={card} alt="Cartão" />
        </CardRight>
      </CardContainer>
    </CardSectionContainer>
  )
}