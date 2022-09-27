import { useState } from 'react';

import plusImg from '../../assets/plus.svg';
import minusImg from '../../assets/minus.svg';

import { CardQuestionContainer } from './styles';

type CardQuestionProps = {
  id: number;
  title: string;
  description: string;
}


export function CardQuestion({ description, id, title }: CardQuestionProps) {
  const [toggle, setToggle] = useState(false);

  function handleOpenToggle() {
    setToggle(!toggle);
  }

  return (
    <CardQuestionContainer>
      <div className="q-con">
        <div className="toggle-title">
          <h4>{title}</h4>
          <button onClick={handleOpenToggle}>
            {toggle ? <img src={minusImg} alt="Fechar" /> : <img src={plusImg} alt="Abrir" />}
          </button>
        </div>
        {toggle && <p>{description}</p>}
      </div>
    </CardQuestionContainer>
  )
}