import { CardContainer } from './styles';

type CardProps = {
  account: string;
  amount: string;
  text: string;
  button: string;
  card: string;
  active: string;
  inactive: string;
  check: string;
  checkDisabled: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  text8: string;
}

export function Card({ account, active, amount, button, card, check, checkDisabled, inactive, text, text1, text2, text3, text4, text5, text6, text7, text8 }: CardProps) {
  return (
    <CardContainer>
      <h4 className="card-title">{account}</h4>
      <h4 className="card-title">{amount} <span>/ m</span></h4>
      <p className='c-para'>{text}</p>

      <div className="button-con">
        <button>{button}</button>
      </div>

      <div className="card-image-con">
        <img src={card} alt="cartão" />
      </div>

      <div className="plan-con">
        <img src={active} alt="Circulo ativo" />
        <img src={inactive} alt="Circulo inativo" />
      </div>

      <div className="list-cont">
        <p className='text-check'>
          <img src={check} alt="check" />
          {text1}
        </p>

        <p className='text-check'>
          <img src={check} alt="check" />
          {text2}
        </p>

        <p className='text-check'>
          <img src={check} alt="check" />
          {text3}
        </p>

        <p className='text-check'>
          <img src={check} alt="check" />
          {text4}
        </p>

        <p className='text-check'>
          <img src={check} alt="check" />
          {text5}
        </p>

        <p className='text-check'>
          <img src={checkDisabled} alt="check" />
          {text6}
        </p>

        <p className='text-check'>
          <img src={checkDisabled} alt="check" />
          {text7}
        </p>

        <p className='text-check'>
          <img src={checkDisabled} alt="check" />
          {text8}
        </p>
      </div>
    </CardContainer>
  )
}